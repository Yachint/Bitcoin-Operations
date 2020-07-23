const axios = require("axios");
const _ = require("lodash");

const USERTOKEN = "e8d18537ee144d90b44e74a36129a989";

/**
 * Create a new wallet using the BlockCypher API
 * @param network - Type of network : test3 / main
 * @param name - Name of the wallet holder
 * @param address - address of the wallet
 *
 * @returns Object containing wallet info
 */

const add_wallet = async (network, name, address) => {
  const res = await axios.post(
    "https://api.blockcypher.com/v1/btc/" +
      network +
      "/wallets?token=" +
      USERTOKEN,
    JSON.stringify({
      name: name,
      addresses: address,
    })
  );

  console.log(res.data);
  return res.data;
};

/**
 * Add Address to existing wallet on BlockCypher
 * @param network - Type of network : test3 / main
 * @param name - Name of the wallet holder
 * @param address - address of the wallet
 *
 * @returns Object that contains addresses associated to wallet
 */

const add_address = async (network, name, address) => {
  const res = await axios.post(
    "https://api.blockcypher.com/v1/btc/" +
      network +
      "/wallets/" +
      name +
      "/addresses?token=" +
      USERTOKEN,
    JSON.stringify({
      addresses: address,
    })
  );

  console.log(res.data);
  return res.data;
};

/**
 * Fetch wallet on BlockCypher
 * @param network - Type of network : test3 / main
 * @param name - Name of the wallet holder
 *
 * @returns Object containing wallet info
 */

const fetch_wallet = async (network, name) => {
  const res = await axios.get(
    "https://api.blockcypher.com/v1/btc/" +
      network +
      "/wallets/" +
      name +
      "/addresses?token=" +
      USERTOKEN
  );

  console.log(res.data);
  return res.data;
};

/**
 * Fetch UTXO for given addresses
 * @param network - Type of network : test3 / main
 * @param receive_wallet - Address of receive wallet
 * @param change_wallet - Address of change wallet
 *
 * @returns A list of UTXOs
 */

const fetch_utxo = async (network, receive_wallet, change_wallet) => {
  const res_1 = await axios.get(
    "https://api.blockcypher.com/v1/btc/" +
      network +
      "/addrs/" +
      receive_wallet +
      "?unspentOnly=true"
  );
  const res_2 = await axios.get(
    "https://api.blockcypher.com/v1/btc/" +
      network +
      "/addrs/" +
      change_wallet +
      "?unspentOnly=true"
  );

  let utxoList = [];
  utxoList = _.concat(res_1.data.txrefs, res_2.data.txrefs);

  console.log(utxoList);
  return utxoList;
};

exports.add_wallet = add_wallet;
exports.add_address = add_address;
exports.fetch_wallet = fetch_wallet;
exports.fetch_utxo = fetch_utxo;
