import { HexString } from "ethers/lib.commonjs/utils/data";
import { ethers, run } from "hardhat";


async function main() {
  const payableContractFactory = await ethers.getContractFactory("Payable");

  const ETH_USD_PRICE_FEED = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" as HexString;

  const payableContract = await payableContractFactory.deploy(
    //  ETH_USD_PRICE_FEED
  );

  await payableContract.waitForDeployment();

  const deployedAddress = await payableContract.getAddress();

  console.log(`Payable contract deployed to ${deployedAddress}`);

  await payableContract.waitForDeployment();

  await verify(deployedAddress, []);

  console.log("latest price ", await payableContract.getLatestPrice());
};

async function verify(contractAddress: string, args: any) {
  await run("verify:verify", {
    address: contractAddress,
    constructorArguments: args,
  });
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit()).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );

  */