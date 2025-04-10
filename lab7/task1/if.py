# a
# a = int(input())
# b = int(input())

# if a >b:
#     print(a)
# else:
#     print(b)


# b

a = int(input())

if (a % 4 == 0 and a % 100 != 0) or (a % 400 == 0):
    print("YES")
else:
    print("NO")


# c
a = int(input())  
b = int(input())  

if (a == 1 and b == 1) or (a != 1 and b != 1):  
    print("YES")  
else:  
    print("NO")  


# d

x = int(input())

if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)

#e

a = int(input())
b = int(input())

if a > b:
    print(1)
if b > a:
    print(2)
else:
    print(0)
