/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "MockPayable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockPayable__factory>;
    getContractFactory(
      name: "Payable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Payable__factory>;
    getContractFactory(
      name: "MockPayable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockPayable__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "MockPayable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockPayable>;
    getContractAt(
      name: "Payable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Payable>;
    getContractAt(
      name: "MockPayable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockPayable>;

    deployContract(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "MockPayable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPayable>;
    deployContract(
      name: "Payable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Payable>;
    deployContract(
      name: "MockPayable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPayable>;

    deployContract(
      name: "AggregatorV3Interface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AggregatorV3Interface>;
    deployContract(
      name: "MockPayable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPayable>;
    deployContract(
      name: "Payable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Payable>;
    deployContract(
      name: "MockPayable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockPayable>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
