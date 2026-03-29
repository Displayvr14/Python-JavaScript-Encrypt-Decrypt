import Encryption


ED = input("Would You Like To Encrypt Text? (Y/N): ").lower()
print(" ")
if ED == "y":
    keyIN = input("ENCRYPTION: Please Input A Key Or Leave Blank For A Random Key: ")
    print(" ")
    if keyIN == "":
        key = Encryption.GenerateKey()
        print("Generated Key: " + Encryption.GenerateKeyString(key))
        print(" ")
    else:
        key = keyIN
    text = input("ENCRYPTION: Please Input The Text You Would Like To Encrypt: ")
    print(" ")
    encrypted = Encryption.Encrypt(text, key)
    print("Encrypted Text: " + encrypted)
    print(" ")
    input("Press Enter To Exit...")
    print(" ")
elif ED == "n":
    keyIN = input("DECRYPTION: Please Input A Key Or Leave Blank For A Random Key: ")
    print(" ")
    if keyIN == "":
        key = Encryption.GenerateKey()
        print("Generated Key: " + Encryption.GenerateKeyString(key))
        print(" ")
    else:
        key = keyIN
    text = input("DECRYPTION: Please Input The Text You Would Like To Decrypt: ")
    print(" ")
    decrypted = Encryption.Decrypt(text, key)
    print("Decrypted Text: " + decrypted)
    print(" ")
    input("Press Enter To Exit...")

