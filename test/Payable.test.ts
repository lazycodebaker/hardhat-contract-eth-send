import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers, network } from "hardhat";
import { BaseContract, ContractTransactionResponse } from "ethers";
import { Payable } from "../typechain-types/contracts/Payable";
import { Payable__factory } from "../typechain-types";


describe("Payable", () => {

  let payableContract: BaseContract & { deploymentTransaction(): ContractTransactionResponse; } & Omit<BaseContract, keyof BaseContract>
  // Payable & { deploymentTransaction(): ContractTransactionResponse; };

  beforeEach(async () => {
    const result = await ethers.getContractFactory("Payable") as Payable__factory;
    payableContract = await result.deploy();
    const deployedCode = await payableContract.getDeployedCode();
    //     console.log("result", result, "deployedCode", deployedCode);
  });

  it("should have the right owner", async () => {
    const ownerContract = await payableContract.deploymentTransaction()?.wait().then((tx) => tx?.from);
    const owner = await (await ethers.provider.getSigner(0)).getAddress();
   
    const networkName = await network.name;

    console.log("FROM payable.test.ts", "networkName", networkName, "ownerContract", ownerContract, "owner", owner)
    expect(ownerContract).to.equal(owner);
  });
});


/*


describe("Payable", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPayableFixture() {
    const Payable = await ethers.getContractFactory("Payable");
    const payable = await Payable.deploy();

    return { payable };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { payable } = await loadFixture(deployPayableFixture);

      expect(await payable.owner()).to.equal(
        await ethers.provider.getSigner(0).getAddress()
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called from another account", async function () {
        const { payable } = await loadFixture(deployPayableFixture);

        // We use payable.connect() to send a transaction from another account
        await expect(payable.connect(ethers.provider.getSigner(1)).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the owner calls it", async function () {
        const { payable } = await loadFixture(deployPayableFixture);

        // Transactions are sent using the first signer by default
        await expect(payable.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { payable } = await loadFixture(deployPayableFixture);

        await expect(payable.withdraw())
          .to.emit(payable, "Withdrawal")
          .withArgs(anyValue, anyValue); // We accept any value as `when` arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { payable } = await loadFixture(deployPayableFixture);

        await expect(payable.withdraw()).to.changeEtherBalances(
          [await ethers.provider.getSigner(0), payable],
          [anyValue, anyValue] // We accept any value as `when` arg
        );
      });
    });
  });
};




describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    return { lock, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async function () {
      const { lock, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { lock, lockedAmount } = await loadFixture(
        deployOneYearLockFixture
      );

      expect(await ethers.provider.getBalance(lock.target)).to.equal(
        lockedAmount
      );
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest();
      const Lock = await ethers.getContractFactory("Lock");
      await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Unlock time should be in the future"
      );
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture);

        await expect(lock.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        );
      });

      it("Should revert with the right error if called from another account", async function () {
        const { lock, unlockTime, otherAccount } = await loadFixture(
          deployOneYearLockFixture
        );

        // We can increase the time in Hardhat Network
        await time.increaseTo(unlockTime);

        // We use lock.connect() to send a transaction from another account
        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { lock, unlockTime } = await loadFixture(
          deployOneYearLockFixture
        );

        // Transactions are sent using the first signer by default
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const { lock, unlockTime, lockedAmount } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw())
          .to.emit(lock, "Withdrawal")
          .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
          deployOneYearLockFixture
        );

        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).to.changeEtherBalances(
          [owner, lock],
          [lockedAmount, -lockedAmount]
        );
      });
    });
  });
});


*/