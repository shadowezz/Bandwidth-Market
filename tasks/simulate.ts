import { subtask, task, types } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { LinkContractV2 } from "../typechain-types";

const linkAddresses: string[] = [];

const linkCapacity = [200, 100, 200];
const bids = [200, 50, 100, 50];
const timeInterval = 30; // 30s

task("simulate", "simulate on mumbai testnet").setAction(async function (
  {}: {},
  hre
) {
  console.log("simulate start");
  console.log("deployment start");
  const Link = await hre.ethers.getContractFactory("LinkContractV2");

  for (let i = 0; i < linkCapacity.length; i++) {
    const link = await Link.deploy(
      linkCapacity[i],
      linkCapacity[i],
      timeInterval,
      "Link" + i,
      "L" + i
    );
    await link.deployed();

    console.log(`Link ${i} deployed to ${link.address}`);
    linkAddresses.push(link.address);
  }
  console.log("Deployment ends");
  for (let i = 0; i < linkAddresses.length; i++) {
    Link.attach(linkAddresses[i]).once(
      "TokensReallocated",
      async function (users, amounts, event) {
        console.log(
          `users: ${JSON.stringify(users)}, amounts: ${JSON.stringify(
            amounts.map((amount: any) => amount.toNumber())
          )}`
        );
      }
    );
  }

  for (let i = 0; i < 4; i++) {
    if (i < 2) {
      hre.run("single-app", { links: [0, 1], userIndex: i, bid: bids[i] });
    } else {
      hre.run("single-app", { links: [0, 2], userIndex: i, bid: bids[i] });
    }
  }
  await new Promise((resolve) =>
    setTimeout(async function () {
      console.log("start allocation");
      for (let i = 0; i < linkAddresses.length; i++) {
        await Link.attach(linkAddresses[i]).allocateBandwidth();
      }
      resolve;
    }, 1000 * timeInterval)
  );

  console.log("done");
});

subtask(
  "single-app",
  "simulate a single application interacting with contracts"
)
  .addPositionalParam("userIndex", undefined, 0, types.int)
  .addPositionalParam("bid", undefined, 0, types.int)
  .addVariadicPositionalParam(
    "links",
    "an array of desired links",
    [],
    types.int
  )
  .setAction(async function (
    {
      links,
      userIndex,
      bid,
    }: { links: number[]; userIndex: number; bid: number },
    hre
  ) {
    const linkContract = await hre.ethers.getContractFactory("LinkContractV2");
    let linkContracts: LinkContractV2[] = [];
    for (let i = 0; i < links.length; i++) {
      linkContracts.push(linkContract.attach(linkAddresses[links[i]]));
    }

    const user = (await hre.ethers.getSigners())[userIndex];
    let subBudget: Array<number> = new Array(links.length).fill(
      bid / links.length
    );
    let prices: Array<Array<number>> = [];
    let allocation: Array<Array<number>> = [];

    for (let i = 0; i < links.length; i++) {
      prices.push([0]);
      allocation.push([0]);
      await linkContracts[i]
        .connect(user)
        .acceptNewBid(subBudget[i], { value: subBudget[i] });
      console.log(
        `userIndex: ${userIndex}, link: ${links[i]}, submitted bid: ${subBudget[i]}`
      );
    }

    let interval = setInterval(async function () {
      console.log("update ran");
      let totalPrice = 0;
      for (let j = 0; j < links.length; j++) {
        const linkPrice =
          (await linkContracts[j].currentTotalBid()).toNumber() /
          linkCapacity[links[j]];
        totalPrice += linkPrice;
        prices[j].push(Math.round(linkPrice * 100) / 100);
      }
      for (let j = 0; j < links.length; j++) {
        let newSubBudget = Math.floor(
          (prices[j][prices[j].length - 1] / totalPrice) * bid
        );
        if (newSubBudget == 0) {
          newSubBudget = 1;
        }
        if (newSubBudget > subBudget[j]) {
          await linkContracts[j]
            .connect(user)
            .updateBid(newSubBudget - subBudget[j], true, {
              value: newSubBudget - subBudget[j],
            });
        } else if (newSubBudget < subBudget[j]) {
          await linkContracts[j]
            .connect(user)
            .updateBid(subBudget[j] - newSubBudget, false);
        }

        subBudget[j] = newSubBudget;
        allocation[j].push(
          Math.round(newSubBudget / prices[j][prices[j].length - 1])
        );
        console.log(`user: ${userIndex}, prices: ${JSON.stringify(prices)}`);
        console.log(
          `user: ${userIndex}, allocations: ${JSON.stringify(allocation)}`
        );
      }
    }, 2000);

    setTimeout(function () {
      clearInterval(interval);
    }, timeInterval * 1000);
  });
