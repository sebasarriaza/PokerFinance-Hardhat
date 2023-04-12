import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect, assert } from "chai";
import { ethers } from "hardhat";

describe("Poker", function () {

  async function deployFixture() {
  
    const [owner, addr1, addr2] = await ethers.getSigners();
  
    const PokerFinance = await ethers.getContractFactory("PokerFinance");
    const pokerFinance = await PokerFinance.deploy();

    return { pokerFinance, owner, addr1, addr2 };
  }

  describe("Full test", function () {
    it("Previous misc", async function () {
    });
  });
});
