

import { ethers, network } from "hardhat";
import { Payable__factory } from "../../typechain-types";
import { BaseContract, ContractTransactionResponse } from "ethers";
import { expect } from "chai";

import hardhatConfig from "../../helper-hardhat.config";
import { describe } from "mocha";

async () => {
    const networkName = await network.name;

    hardhatConfig.deploymentChains.includes(networkName) ? describe.skip :
        describe("Payable", () => {
            let payableContract: BaseContract & { deploymentTransaction(): ContractTransactionResponse; } & Omit<BaseContract, keyof BaseContract>

            beforeEach(async () => {
                const result = await ethers.getContractFactory("Payable") as Payable__factory;
                payableContract = await result.deploy();
                const deployedCode = await payableContract.getDeployedCode();
            });

            it("should have the right owner", async () => {
                const ownerContract = await payableContract.deploymentTransaction()?.wait().then((tx) => tx?.from);
                const owner = await (await ethers.provider.getSigner(0)).getAddress();
                console.log("FROM Payable.Staging.test.ts")
                expect(ownerContract).to.equal(owner);
            });
        });
};