const process = require("process");


const main = async () => {

  

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed(); 

  console.log(
    `Transactions  deployed to ${transactions.address}`
  );
}

const runMain = async () => {
    try {
      await main();
      process.exit(0)
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}
runMain();

