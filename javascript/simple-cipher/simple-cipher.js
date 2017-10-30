const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function generateKey() {
  
}

var Cipher = function(key) {
  this.key = key || generateKey();
}

Cipher.prototype.encode = function(plaintext) {

};

Cipher.prototype.decode = function(ciphertext) {

};

module.exports = Cipher;