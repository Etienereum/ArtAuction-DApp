
const AuctionBox = artifacts.require("AuctionBox");
const Auction = artifacts.require("Auction");

module.exports = function(deployer) {
  deployer.deploy(AuctionBox).then(function(owner, title, startPrice, descpt) {
    return deployer.deploy(Auction, AuctionBox.address);
  });
};
