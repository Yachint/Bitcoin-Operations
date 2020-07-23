const bitcoin = require("bitcoinjs-lib");
const bip32 = require("bip32");

/**
 * Generates address using xpub for a specified bitcoin networks
 * @param network - Type of network : test3 / main
 * @param xpub - Extended Public Key
 * @param start - Starting index
 * @param end - Ending index
 *
 * @returns A list of addresses
 */

const address_list = (network, xpub, start, end) => {
  const addressList = [];

  for (var i = start; i <= end; i++) {
    const { address } = bitcoin.payments.p2pkh({
      pubkey: bip32.fromBase58(xpub).derive(i).publicKey,
      network: network,
    });

    addressList.push(address);
  }

  return addressList;
};

module.exports = address_list;
