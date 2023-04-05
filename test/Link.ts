import { expect } from "chai";
import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-toolbox";

describe.only("Link", function () {
  async function deployContractFixture() {
    const link = await ethers.getContractFactory("LinkContractV2");
    const accounts = await ethers.getSigners();
    const initialTokenSupply = 1000;
    const capacity = 1000;
    const timeInterval = 60 * 10; // 10mins
    const linkName = "Link001";
    const linkSymbol = "L001";
    const hardhatLink = await link.deploy(
      initialTokenSupply,
      capacity,
      timeInterval,
      linkName,
      linkSymbol
    );
    return {
      link,
      hardhatLink,
      initialTokenSupply,
      capacity,
      timeInterval,
      linkName,
      linkSymbol,
      accounts,
    };
  }

  async function singleUserBiddedFixture() {
    const { hardhatLink, accounts } = await deployContractFixture();
    const bid = 10;
    const user = accounts[0];
    await hardhatLink.acceptNewBid(bid, { value: bid });
    return { hardhatLink, bid, user };
  }

  describe("Deployment", function () {
    it("Contract holds initial supply of tokens", async function () {
      const { hardhatLink, initialTokenSupply } = await loadFixture(
        deployContractFixture
      );
      const contractBalance = await hardhatLink.balanceOf(hardhatLink.address);
      const totalSupply = await hardhatLink.totalSupply();
      expect(contractBalance).equal(initialTokenSupply);
      expect(totalSupply).equal(initialTokenSupply);
    });

    it("Parameters are correct", async function () {
      const { hardhatLink, timeInterval, capacity, linkName, linkSymbol } =
        await loadFixture(deployContractFixture);

      expect(await hardhatLink.name()).equal(linkName);
      expect(await hardhatLink.symbol()).equal(linkSymbol);
      expect(await hardhatLink.linkCapacity()).equal(capacity);
      expect(await hardhatLink.previousTotalBid()).equal(0);
      expect(await hardhatLink.currentTotalBid()).equal(0);
      expect(await hardhatLink.currentTimestamp()).to.not.equal(0);
      expect(await hardhatLink.timeInterval()).equal(timeInterval);
    });
  });

  describe("Accept New Bid", function () {
    it("Bid cannot be 0", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      await expect(hardhatLink.acceptNewBid(0)).to.be.revertedWith(
        "Bid must be positive"
      );
    });

    it("Amount sent cannot be less than bid", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      await expect(
        hardhatLink.acceptNewBid(10, { value: 9 })
      ).to.be.revertedWith("Incorrect amount sent");
    });

    it("One user cannot bid twice", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      const bid = 10;
      await hardhatLink.acceptNewBid(bid, { value: bid });
      await expect(
        hardhatLink.acceptNewBid(bid, { value: bid })
      ).to.be.revertedWith("User has already bidded");
    });

    it("Single new bid, correct", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      const bid = 10;
      await expect(hardhatLink.acceptNewBid(bid, { value: bid }))
        .to.emit(hardhatLink, "TotalBidChanged")
        .withArgs(0, bid);
      expect(await hardhatLink.getUserCurrentBid()).equal(bid);
      expect(await hardhatLink.hasUserBidded()).equal(true);
      expect(await hardhatLink.currentTotalBid()).equal(bid);
    });

    it("Two consecutive new bids, correct", async function () {
      const { hardhatLink, accounts } = await loadFixture(
        deployContractFixture
      );
      const bids = [10, 20];
      const users = accounts.slice(1, 3);
      for (let i = 0; i < bids.length; i++) {
        await hardhatLink
          .connect(users[i])
          .acceptNewBid(bids[i], { value: bids[i] });
      }
      for (let i = 0; i < bids.length; i++) {
        expect(await hardhatLink.connect(users[i]).getUserCurrentBid()).equal(
          bids[i]
        );
        expect(await hardhatLink.connect(users[i]).hasUserBidded()).equal(true);
      }

      expect(await hardhatLink.currentTotalBid()).equal(
        bids.reduce((prev, next) => prev + next, 0)
      );
    });
  });

  describe("Update New Bid", function () {
    it("Bid must exist", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      const changeAmt = 10;
      await expect(hardhatLink.updateBid(changeAmt, true)).to.be.revertedWith(
        "Invalid sender"
      );
    });

    it("If change amt = 0, nothing changes", async function () {
      const { hardhatLink, bid } = await loadFixture(singleUserBiddedFixture);
      await hardhatLink.updateBid(0, true);
      expect(await hardhatLink.getUserCurrentBid()).equal(bid);
      expect(await hardhatLink.currentTotalBid()).equal(bid);
    });

    it("If new bid is larger than original, correct topup amount sent", async function () {
      const { hardhatLink } = await loadFixture(singleUserBiddedFixture);
      const bidIncrement = 10;
      await expect(
        hardhatLink.updateBid(bidIncrement, true, {
          value: bidIncrement - 1,
        })
      ).to.be.revertedWith("Incorrect amount sent");
    });

    it("If new bid larger than original, correct end state and event emited", async function () {
      const { hardhatLink, bid } = await loadFixture(singleUserBiddedFixture);
      const bidIncrement = 10;
      const newBid = bid + bidIncrement;
      await expect(
        hardhatLink.updateBid(bidIncrement, true, { value: bidIncrement })
      )
        .to.emit(hardhatLink, "TotalBidChanged")
        .withArgs(bid, newBid);
      expect(await hardhatLink.getUserCurrentBid()).equal(newBid);
      expect(await hardhatLink.currentTotalBid()).equal(newBid);
    });

    it("Cannot decrease by more than current bid", async function () {
      const { hardhatLink, bid } = await loadFixture(singleUserBiddedFixture);
      await expect(hardhatLink.updateBid(bid + 1, false)).to.be.revertedWith(
        "Not enough existing bid"
      );
    });

    it("If new bid less than original, refunded, correct end state and event emitted", async function () {
      const { hardhatLink, bid, user } = await loadFixture(
        singleUserBiddedFixture
      );
      const bidDecrement = 5;
      const newBid = bid - bidDecrement;
      await expect(hardhatLink.updateBid(bidDecrement, false))
        .to.emit(hardhatLink, "TotalBidChanged")
        .withArgs(bid, newBid)
        .and.to.changeEtherBalances(
          [hardhatLink.address, user.address],
          [-bidDecrement, +bidDecrement]
        );

      expect(await hardhatLink.getUserCurrentBid()).equal(newBid);
      expect(await hardhatLink.currentTotalBid()).equal(newBid);
    });

    it("Reentrancy test", async function () {
      const { hardhatLink } = await loadFixture(singleUserBiddedFixture);
      const maliciousContract = await ethers.getContractFactory(
        "MaliciousContract"
      );
      const hardhatMaliciousContract = await maliciousContract.deploy(
        hardhatLink.address,
        { value: 10 }
      );

      await expect(hardhatMaliciousContract.depleteFunds()).to.be.revertedWith(
        "ReentrancyGuard: reentrant call"
      );
    });
  });

  describe("Allocate bandwidth", function () {
    it("Current round must have ended", async function () {
      const { hardhatLink } = await loadFixture(deployContractFixture);
      await expect(hardhatLink.allocateBandwidth()).to.be.revertedWith(
        "Current round has not ended"
      );
    });

    it("Token balances are correct, events emitted, end state correct", async function () {
      const { hardhatLink, accounts, timeInterval, initialTokenSupply } =
        await loadFixture(deployContractFixture);
      const bids = [10, 20, 30];
      const users = accounts.slice(1, 4);
      for (let i = 0; i < bids.length; i++) {
        await hardhatLink
          .connect(users[i])
          .acceptNewBid(bids[i], { value: bids[i] });
      }
      const totalBid = bids.reduce((prev, next) => prev + next, 0);
      const tokenDistribution = bids.map((bid) =>
        Math.floor((bid * initialTokenSupply) / totalBid)
      );
      const originalTimestamp = await hardhatLink.currentTimestamp();
      await time.increase(timeInterval);
      await expect(hardhatLink.allocateBandwidth())
        .to.emit(hardhatLink, "TokensReallocated")
        .withArgs(
          users.map((user) => user.address),
          tokenDistribution
        );
      // check tokenbalances
      for (let i = 0; i < bids.length; i++) {
        expect(await hardhatLink.balanceOf(users[i].address)).equal(
          tokenDistribution[i]
        );
      }

      // check contract parameters
      expect(await hardhatLink.previousTotalBid()).equal(totalBid);
      expect(await hardhatLink.currentTotalBid()).equal(0);
      expect(await hardhatLink.currentTimestamp()).greaterThan(
        originalTimestamp
      );
      for (let i = 0; i < bids.length; i++) {
        expect(await hardhatLink.connect(users[i]).hasUserBidded()).equal(
          false
        );
        expect(await hardhatLink.connect(users[i]).getUserCurrentBid()).equal(
          0
        );
      }
    });

    it("Last allocation results override previous allocation", async function () {
      const { hardhatLink, accounts, timeInterval, initialTokenSupply } =
        await loadFixture(deployContractFixture);
      const firstBids = [10, 20, 30];
      const firstUsers = accounts.slice(1, 4);
      for (let i = 0; i < firstBids.length; i++) {
        await hardhatLink
          .connect(firstUsers[i])
          .acceptNewBid(firstBids[i], { value: firstBids[i] });
      }
      await time.increase(timeInterval);
      await hardhatLink.allocateBandwidth();

      const secondBids = [40, 50, 60];
      const secondUsers = accounts.slice(3, 6);
      for (let i = 0; i < secondBids.length; i++) {
        await hardhatLink
          .connect(secondUsers[i])
          .acceptNewBid(secondBids[i], { value: secondBids[i] });
      }
      let totalBid = secondBids.reduce((prev, next) => prev + next, 0);
      let tokenDistribution = secondBids.map((bid) =>
        Math.floor((bid * initialTokenSupply) / totalBid)
      );
      let originalTimestamp = await hardhatLink.currentTimestamp();
      await time.increase(timeInterval);

      await expect(hardhatLink.allocateBandwidth())
        .to.emit(hardhatLink, "TokensReallocated")
        .withArgs(
          secondUsers.map((user) => user.address),
          tokenDistribution
        );

      // check tokenbalances
      for (let i = 0; i < secondBids.length; i++) {
        expect(await hardhatLink.balanceOf(secondUsers[i].address)).equal(
          tokenDistribution[i]
        );
      }
      for (let i = 0; i < firstBids.length - 1; i++) {
        expect(await hardhatLink.balanceOf(firstUsers[i].address)).equal(0);
      }

      // check contract parameters
      expect(await hardhatLink.previousTotalBid()).equal(totalBid);
      expect(await hardhatLink.currentTotalBid()).equal(0);
      expect(await hardhatLink.currentTimestamp()).greaterThan(
        originalTimestamp
      );
      for (let i = 0; i < secondUsers.length; i++) {
        expect(await hardhatLink.connect(secondUsers[i]).hasUserBidded()).equal(
          false
        );
        expect(
          await hardhatLink.connect(secondUsers[i]).getUserCurrentBid()
        ).equal(0);
      }
      for (let i = 0; i < firstUsers.length; i++) {
        expect(await hardhatLink.connect(firstUsers[i]).hasUserBidded()).equal(
          false
        );
        expect(
          await hardhatLink.connect(firstUsers[i]).getUserCurrentBid()
        ).equal(0);
      }
    });
  });
});
