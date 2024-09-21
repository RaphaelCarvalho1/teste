print("Escreva um número:")
num = int(input())

f_1 = 1
f_2 = 1

while num > f_2:
    f_aux = f_1 + f_2
    f_1 = f_2
    f_2 = f_aux
    
if num == f_2:
    print("O número", num, "pertence a sequência de fibonacci.")
else:
    print("O número", num, "não pertence a sequência de fibonacci.")