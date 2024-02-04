import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, RunSuperFunction } from "hardhat/types";

// type ActionType = (taskArgs: any, env: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => Promise<any>;

task("block_number", "Prints the current block number").setAction(async ( _,{ ethers  }) => {
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Current block number: " + blockNumber);
});