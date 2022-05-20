import { task } from "hardhat/config"

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})


task("balance", "Prints the list of accounts and balance", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        let balance = await hre.ethers.provider.getBalance(account.address)
        console.log(`Acc: ${account.address } , balance: ${balance} `);
    }
})

