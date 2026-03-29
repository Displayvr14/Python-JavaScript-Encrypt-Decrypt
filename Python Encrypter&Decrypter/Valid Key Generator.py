import Encryption

num_keys = int(input("How Many Keys Would You Like To Generate? "))
for _ in range(num_keys):
    key = Encryption.GenerateKey()
    print(f"Generated Key {_ + 1}: " + Encryption.GenerateKeyString(key))
input("Press Enter To Exit...")