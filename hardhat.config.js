require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `${process.env.ALCHEMY_GOERLI_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
      // accounts: `${process.env.PRIVATE_KEY}`
    }
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_KEY}`
  }
};