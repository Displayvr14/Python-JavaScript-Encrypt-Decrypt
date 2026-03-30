let Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '.', ',', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '/', '\\', '|', ':', ';', '"', "'", '<', '>', '~', '`']

function Encrypt(text, key) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = Letters.indexOf(char);
        if (index !== -1) {
            encrypted += key[index];
        } else {
            encrypted += char; // If character not found, keep it as is
        }
    }
    return encrypted;
}

function Decrypt(encryptedText, key) {
    let decrypted = '';
    for (let i = 0; i < encryptedText.length; i++) {
        let char = encryptedText[i];
        let index = key.indexOf(char);
        if (index !== -1) {
            decrypted += Letters[index];
        } else {
            decrypted += char; // If character not found, keep it as is
        }
    }
    return decrypted;
}

function GenerateKey() {
    let arr = Letters.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function KeyToString(key) {
    return key.join('');
}

function StringToKey(str) {
    return str.split('');
}

function Hash(text, length = 10) {
    let Hashed = "";
    for (let char of text) {
        Hashed += String(Math.ceil(((char.charCodeAt(0) % length) * length)));
    }
    return Hashed.slice(0, length);
}

function CheckIfHashMatches(text, hash) {
    return Hash(text) == hash;
}


window.Cryptography = {
    encrypt: Encrypt,
    decrypt: Decrypt,
    generateKey: GenerateKey,
    keyToString: KeyToString,
    stringToKey: StringToKey,
    hash: Hash,
    checkIfHashMatches: CheckIfHashMatches
}
