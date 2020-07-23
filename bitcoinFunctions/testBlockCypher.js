const blockCypher = require("./blockCypher");
const { address } = require("bitcoinjs-lib");

const name = "yachintNew";
const network = "test3";
const addressList = ["mhhR6abjK1tp1Au1qGu55r25kqi4PjKEos"];

// console.log("Creating a new Wallet :");
// blockCypher
//   .add_wallet(network, name, ["mgpu6DnRBVbkyHAa5Vrfc9GDz2X6biSXJ7"])
//   .then(() => {
//     console.log("Adding Address List :");
//     blockCypher.add_address(network, name, addressList).then(() => {
//       console.log("Fetching created wallet :");
//       blockCypher.fetch_wallet(network, name);
//     });
//   });

blockCypher.fetch_utxo(
  network,
  "mmWEH488pYtXQtXhY48VYPsenBkN1D3mUD",
  "mhhR6abjK1tp1Au1qGu55r25kqi4PjKEos"
);
