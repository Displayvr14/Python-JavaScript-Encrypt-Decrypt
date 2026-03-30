

const EncryptButton = document.getElementById('encryptButton');
const DecryptButton = document.getElementById('decryptButton');

const InputText = document.getElementById('inputText');
const InputKey = document.getElementById('inputKey');
const OutputText = document.getElementById('outputLabel');
const GenerateKeyButton = document.getElementById('GenerateKeyButton');
const HashButton = document.getElementById('HashButton');
const CheckHashButton = document.getElementById('CheckHashButton');

CheckHashButton.addEventListener('click', () => {
    const text = InputKey.value;
    const hash = InputText.value;
    const calculatedHash = Cryptography.hash(text, 21);
    console.log('Calculated Hash:', calculatedHash);
    if (calculatedHash == hash) {
        OutputText.textContent = 'Output: \n Hash matches!';
    } else {
        OutputText.textContent = 'Output: \n Hash does not match.';
    }
});

HashButton.addEventListener('click', () => {
    let Length = 21;
    OutputText.textContent = 'Output: \n' + Cryptography.hash(InputText.value, Length);
});
GenerateKeyButton.addEventListener('click', () => {
    console.log('Generating Key...');
    const key = Cryptography.generateKey();
    OutputText.textContent = 'Output: \n' + Cryptography.keyToString(key);
    InputKey.value = Cryptography.keyToString(key);
});

EncryptButton.addEventListener('click', () => {
    if (InputKey.value.trim() === '') {
        InputKey.value = Cryptography.keyToString(Cryptography.generateKey());
    }
    OutputText.textContent = 'Output: \n' + encrypt(InputText.value, InputKey.value);
});
DecryptButton.addEventListener('click', () => {
    if (InputKey.value.trim() === '') {
        InputKey.value = Cryptography.keyToString(Cryptography.generateKey());
    }
    OutputText.textContent = 'Output: \n' + decrypt(InputText.value, InputKey.value);
});

function encrypt(text, key) {
    const KeyObject = Cryptography.stringToKey(key);
    return Cryptography.encrypt(text, KeyObject);
}
function decrypt(text, key) {
    const KeyObject = Cryptography.stringToKey(key);
    return Cryptography.decrypt(text, KeyObject);
}