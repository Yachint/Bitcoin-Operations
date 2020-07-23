const bitcoin = require("bitcoinjs-lib");

function buildTransaction(inputs, outputs) {
  var txBuilder = new bitcoin.TransactionBuilder(bitcoin.networks.bitcoin);
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    txBuilder.addInput(
      input.txid,
      input.vout,
      0xffffffff,
      Buffer.from(input.scriptPubKey, "hex")
    );
  }

  for (var i = 0; i < outputs.length; i++) {
    var output = outputs[i];
    txBuilder.addOutput(output.address, output.amount);
  }
  var tx = txBuilder.buildIncomplete();
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    tx.ins[i].script = Buffer.from(input.scriptPubKey, "hex");
  }
  return tx.toHex();
}

module.exports = buildTransaction;
