import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "hardhat-deploy";

import "./tasks/block_number"
import "./tasks/balance"

interface IHardhatUserConfig extends HardhatUserConfig {
  defaultNetwork : "hardhat" | "sepolia" | "rinkeby" | "mainnet";
};

const config: IHardhatUserConfig = {
  solidity: "0.8.0",
  defaultNetwork : "hardhat",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/c9185707c2cd41a58f6f7ff122d848a6",
      accounts: ["062f1f42437150a623c1b3aa2b9409a0be9d46b12437bf78440b651fb92caacd"],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    root: "./"
  },
  etherscan: {
    apiKey: "HDGKSBTF5YSIA26CBGN8ZSKTIGA2Q6BSAI",
    enabled: true,
  },
  sourcify: {
    enabled: true,
  },
  gasReporter: {
    enabled: true,
    // currency: "USD",
    //  gasPrice : 100,
    // coinmarketcap: "a1a4f0a5-6a0b-4c5d-9f3c-5a9c4b0f0b1c",
    // excludeContracts : ["contracts/mocks/"],
    src: "./contracts",
    outputFile: "gas-report.txt",
  },

  // for deploy / 
  namedAccounts : {
    deployer :{
      default : 0,
    }
  }
};

export default config; 
