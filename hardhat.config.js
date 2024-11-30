require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,  // Hardhat's default chain ID
    },
    localhost: {
      url: "http://localhost:8545",  // Hardhat network URL
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts", // Location to store contract artifacts
  },
};

