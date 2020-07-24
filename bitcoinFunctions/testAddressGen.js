const bitcoin = require("bitcoinjs-lib");
const address_list = require("./addressList");

const xpub =
  "xpub6CzDCPbtLrrn4VpVbyyQLHbdSMpZoHN4iuW64VswCyEpfjM2mJGdaHJ2DyuZwtst96E16VvcERb8BBeJdHSCVmAq9RhtRQg6eAZFrTKCNqf";

console.log(address_list(bitcoin.networks.testnet, xpub, 0, 0, 5));
