
// Make sure the Token contract is included by requireing it.
const TokenIns = artifacts.require("Token");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the Token
  await deployer.deploy(TokenIns, "ApexMiner", "APM", 18, "50000000000000000000000");
  const Token = await TokenIns.deployed()

};