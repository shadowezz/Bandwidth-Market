import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

async function main() {
  const Link = await ethers.getContractFactory(
    "contracts/Link.sol:LinkContract"
  );
  const timeInterval = 60 * 5; // 5mins
  const link = await Link.deploy(200, 200, timeInterval, "Link0", "L0");
  await link.deployed();
  console.log(`link deployed to ${link.address}`);

  const accounts = await ethers.getSigners();
  //   const address = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"; //v2
  //   const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; //v1
  //   const link = Link.attach(address);
  const allocationGas = [];
  let totalGas = 0;
  for (let i = 0; i < 20; i++) {
    // const index = Math.floor(Math.random() * accounts.length) + 1;
    // const index = i % 2 == 0 ? 0 : 10;
    for (let j = 0; j < 10; j++) {
      //   const bidAmount = Math.floor(Math.random() * 100) + 1;
      await link.connect(accounts[j]).acceptNewBid(200, { value: 200 });
    }

    await time.increase(timeInterval);

    const tx = await link.allocateBandwidth();
    const receipt = await tx.wait();
    const gasUsed = parseInt(receipt.gasUsed);
    allocationGas.push(gasUsed);
    console.log(`Round ${i}: ${gasUsed}`);
    totalGas += gasUsed;
  }
  console.log(allocationGas);
  console.log(Math.round(totalGas / 20));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
