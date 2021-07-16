/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-solhint");

 const { API_URL, PRIVATE_KEY } = process.env;

 module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "rinkeby",
    networks: {
       hardhat: {},
       rinkeby: {
          url: API_URL,
          accounts: [`0x${PRIVATE_KEY}`]
       }
    },
 }