import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "./tasks";

dotenv.config();

const {
  GOERLI_RPC,
  GOERLI_PRIVATE_KEY,
  PRIVATE_KEY_2,
  POLYGON_MUMBAI_RPC,
  POLYGONSCAN_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      // forking: {
      //   url: "https://eth-mainnet.g.alchemy.com/v2/2_NzEX_L2gAX8yC1FMEgWMiBlx96HyPT",
      // },
    },
    goerli: {
      url: GOERLI_RPC,
      accounts: [GOERLI_PRIVATE_KEY!],
    },
    mumbai: {
      url: POLYGON_MUMBAI_RPC,
      accounts: [GOERLI_PRIVATE_KEY!, PRIVATE_KEY_2!],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v5",
  },
};

export default config;
