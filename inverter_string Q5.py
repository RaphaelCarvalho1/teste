string = input()

def inverte(string):
    reversa = ""

    for i in range(len(string)-1, -1, -1):
        reversa += string[i]

    return reversa

print(inverte(string))