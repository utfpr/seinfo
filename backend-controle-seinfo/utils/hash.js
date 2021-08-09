// import sha256 from 'crypto-js/sha256';

const cryptoJS = require('crypto-js');

exports.generateHash = (password) =>
  Buffer.from(cryptoJS.SHA256(password).toString(), 'hex').toString();
