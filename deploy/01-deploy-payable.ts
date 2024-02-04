import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import hardhatConfig from "../helper-hardhat.config";

const deployFunc = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const networkConfigHelper = hardhatConfig.networkConfig;

    //  console.log("deployer", deployer , "deployments", deployments , "getNamedAccounts", await getNamedAccounts() , "deploy", deploy);

    // const chainId_hre = await hre.getChainId();

    // deploy --> 

    const chaindId = await network.config.chainId;

    let priceFeedAddress = "";

    if (chaindId === 11155111) {
        priceFeedAddress = networkConfigHelper[chaindId].priceFeedAddress;
    } else if (chaindId === 4) {
        //  
    }

    // console.log(await deployments.get("MockPayable"));

    // deploy mocks if contract dont exist 

    const result = await deploy("Payable", {
        from: deployer,
        log: true,
    });


    // const chaindId_network = await network.config.chainId;

    // for localhost / hardhat network use mock deploy 



};

// 0x65585649Ce1986f84B2DE2b0a88DEE606Fd32B27

// 062f1f42437150a623c1b3aa2b9409a0be9d46b12437bf78440b651fb92caacd

deployFunc.tags = ["all", "payable"];

export default deployFunc;