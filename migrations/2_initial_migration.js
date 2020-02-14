const Migrations = artifacts.require("AuctionHouse");

module.exports = function(deployer) {
  deployer.deploy(AuctionHouse);
};
