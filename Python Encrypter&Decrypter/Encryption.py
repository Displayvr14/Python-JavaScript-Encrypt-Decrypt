import random

Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '.', ',', '?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '/', '\\', '|', ':', ';', '"', "'", '<', '>', '~', '`']

def GenerateKey():
    key = Letters.copy()
    random.shuffle(key)
    return key

def Decrypt(text, key):
    decrypted = ""
    for char in text:
        if char in key:
            index = key.index(char)
            decrypted += Letters[index]
        else:
            decrypted += char
    return decrypted

def Encrypt(text, key: list):
    encrypted = ""
    for char in text:
        if char in Letters:
            index = Letters.index(char)
            encrypted += key[index]
        else:
            encrypted += char
    return encrypted

def GenerateKeyString(key: list):
    keyString = ""
    for char in key:
        keyString += char
    return keyString

def KeyStringToList(keyString: str):
    keyList = []
    for char in keyString:
        keyList.append(char)
    return keyList