import { HardhatRuntimeEnvironment } from "hardhat/types";
import hardhatConfig from '../helper-hardhat.config'

const deployMockFunc = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, network } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const networkName = await network.name;

    if (hardhatConfig.deploymentChains.includes(networkName)) {
        const result = await deploy("MockPayable", {
            from: deployer, args: [], log: true,
        });
    };

    console.log(await deployments.get("MockPayable"));
};

// add tags 
deployMockFunc.tags = ["all","mocks"];

export default deployMockFunc;