import { task } from "hardhat/config";

// type ActionType = (taskArgs: any, env: HardhatRuntimeEnvironment, runSuper: RunSuperFunction<any>) => Promise<any>;

export default task("balance", "Prints the Balance of the given address").addParam("address", "The address to get the balance of").setAction(async (taskArgs, { ethers }) => {
    const balance = await ethers.provider.getBalance(taskArgs.address);
    const formatBalance = ethers.formatEther(balance);
    console.log(`The balance of ${taskArgs.address} is ${formatBalance} ETH`);
});