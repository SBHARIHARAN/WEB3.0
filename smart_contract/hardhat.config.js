require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/921_vGumQ2B4VxguDkZAw4PVYgd7XghA',
      accounts: [ '0x8D1a1B50c3Ffc3AFD19A81b09AF8768426feE874' ],
    },
  },
};