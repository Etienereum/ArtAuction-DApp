import Auctions from "@/contracts/AuctionHouse.json";
import Auctions from "@/contracts/Auction.json";

const options = {
    web3: {
        block: false,
        fallback : {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    },

    contracts: [Auction, AuctionHouse],
    events: {

    },
    polls: {
        accounts : 15000
    }
};

export default options;