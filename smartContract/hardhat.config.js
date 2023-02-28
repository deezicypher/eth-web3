//https://eth-goerli.g.alchemy.com/v2/vGy_5Jp2lltbZdwd6zesQktwFyUvTd2C

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/vGy_5Jp2lltbZdwd6zesQktwFyUvTd2C",
      accounts: ['5ea360f7433c72f5ae00f95795c7ccbfc205c2f22eeb72709a1ac240d39feadb']
    }
  }
}
