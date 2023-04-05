import { ethers } from "hardhat";

async function main() {
  const Link = await ethers.getContractFactory(
    "contracts/LinkV2.sol:LinkContractV2"
  );

  const capacities = [200, 100, 200];
  const timeInterval = 60 * 5; // 5mins

  for (let i = 0; i < capacities.length; i++) {
    const link = await Link.deploy(
      capacities[i],
      capacities[i],
      timeInterval,
      "Link" + i,
      "L" + i
    );
    const tx = await link.deployed();

    console.log(`Link ${i} deployed to ${link.address}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
