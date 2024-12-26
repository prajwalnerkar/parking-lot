require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/XbAWTmE5yFKC6V27tSdY1TmCJ9jRBRnl",
      accounts: ["f10e05740d9d92f67393dc2684804d3a3c7f37fb677e45929354d36f7b133905"], 
    },
  },
};
