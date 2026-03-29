const crypto = require('./Encryption.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many keys do you want to generate? ', (answer) => {
  const amount = parseInt(answer);
  for (let i = 0; i < amount; i++) {
    let key = crypto.keyToString(crypto.generateKey());
    console.log(`Key ${i + 1}: ${key}`);
  }
  rl.close();
});