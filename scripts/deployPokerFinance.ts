import { ethers } from "hardhat";

async function main() {

  const [owner, addr1, addr2] = await ethers.getSigners();
  
  const PokerFinance = await ethers.getContractFactory("PokerFinance");
  const pokerFinance = await PokerFinance.deploy();

  await pokerFinance.deployed();

  console.log(
    `PokerFinance deployed to ${pokerFinance.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
