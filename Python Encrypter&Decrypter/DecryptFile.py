import Encryption

fileDir = input("Enter the name of the file you want to decrypt: ")
KeyIN = input("Enter Your Key Or Leave Blank For A New Random Key: ")
if KeyIN == "":
    Key = Encryption.GenerateKey()
    print("Generated Key: " + Encryption.GenerateKeyString(Key))
else:
    Key = Encryption.KeyStringToList(KeyIN)

fileDir = './' + fileDir

with open(fileDir, 'r') as file:
    fileData = file.read()

decryptedData = Encryption.Decrypt(fileData, Key)

with open(fileDir, 'w') as file:
    file.write(decryptedData)
print("File Decrypted Successfully!")
input("Press Enter To Exit...")
# enf*@+Va:BWCQj$~P<>&=3J0?`E%oRtSYu9F6)XkgsTlz#vH/mIb7xcGyD5|!ZU\Ap;'KO,_"i81L(.hMdr- N4q^w2