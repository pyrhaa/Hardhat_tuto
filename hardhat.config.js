require("@nomiclabs/hardhat-waffle")
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY

const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
