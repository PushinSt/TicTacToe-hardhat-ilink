import { task } from "hardhat/config"

// npx hardhat create-game --network ropsten --address $address --player $player --time $time
task("create-game", "Create new game")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("time", "Waiting time for the opponent's move")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        await contract.connect(sign[taskArgs.player]).createGame(taskArgs.time)
        console.log("Done!")
    })

// npx hardhat find-game --network ropsten --address $address --player $player --index $index --timeMin $timeMin --timeMax $timeMax
task("find-game", "Find one game")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("index", "Search start index game")
    .addParam("timemin", "Min waiting time")
    .addParam("timemax", "Max waiting time")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        const answer = await contract.connect(sign[taskArgs.player]).findOneGame(taskArgs.index, taskArgs.timemin, taskArgs.timemax);
        console.log("id game: " + answer)
        console.log("Done!")
    })


// npx hardhat pause-game --network ropsten --address $address --player $player --id $id
task("pause-game", "Pause/Continue find player for game")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("id", "Id game")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        await contract.connect(sign[taskArgs.player]).pauseGame(taskArgs.id)
        console.log("Done!")
    })

// npx hardhat join-game --network ropsten --address $address --player $player --id $id
task("join-game", "Join a new game")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("id", "Id game")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        await contract.connect(sign[taskArgs.player]).joinGame(taskArgs.id)
        console.log("Done!")
    })


// npx hardhat move-player --network ropsten --address $address --player $player --id $id --cell $cell
task("move-player", "Make a move")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("id", "Id game")
    .addParam("cell", "The position of the cell in the game")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        await contract.connect(sign[taskArgs.player]).movePlayer(taskArgs.id, taskArgs.cell)
        console.log("Done!")
    })


// npx hardhat isFinish --network ropsten --address $address --player $player --id $id
task("isFinish", "Check status game")
    .addParam("address", "The contract address")
    .addParam("player", "The player number")
    .addParam("id", "Id game")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const sign = await hre.ethers.getSigners();
        await contract.connect(sign[taskArgs.player]).isFinish(taskArgs.id)
        console.log("Done!")
    })


// npx hardhat get-player-games --network ropsten --address $address --player $player
task("get-player-games", "Get all games by player")
    .addParam("address", "The contract address")
    .addParam("player", "The player address")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const answer = await contract.getGamesByPlayer(taskArgs.player)
        console.log(answer)
        console.log("Done!")
    })


// npx hardhat get-statistic-player --network ropsten --address $address --player $player
task("get-statistic-player", "Get statistic by player")
    .addParam("address", "The contract address")
    .addParam("player", "The player address")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const answer = await contract.statisticsPlayer(taskArgs.player)
        console.log(answer)
        console.log("Done!")
    })


// npx hardhat get-statistic-games --network ropsten --address $address 
task("get-statistic-games", "Get statistic by all games")
    .addParam("address", "The contract address")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const answer = await contract.statisticsGames()
        console.log(answer)
        console.log("Done!")
    })


// npx hardhat get-one-game --network ropsten --address $address --id $id
task("get-one-game", "Get one game of id")
    .addParam("address", "The contract address")
    .addParam("id", "Id game")
    .setAction(async (taskArgs, hre) => {
        const Token = await hre.ethers.getContractFactory("TicTacToe")
        const contract = await Token.attach(taskArgs.address)
        const answer = await contract.getOneGame(taskArgs.id)
        console.log(answer)
        console.log("Done!")
    })