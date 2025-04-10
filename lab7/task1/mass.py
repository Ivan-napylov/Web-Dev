# a
# N = int(input())
# arr = list(map(int, input().split()))

# print(*arr[0:N:2])


# b
# N = int(input())
# arr = list(map(int, input().split()))

# for el in arr:
#     if el % 2 == 0:
#         print(el)


# c
# N = int(input())
# arr = list(map(int, input().split()))

# i = 0
# for el in arr:
#     if el > 0:
#         i += 1
# print(i)

# d
# N = int(input())
# arr = list(map(int, input().split()))

# l = 0
# for i in range(N - 1):
#     if  arr[i] < arr[i + 1]:
#         l += 1
# print(l)

# e
# N = int(input())
# arr = list(map(int, input().split()))

# for i in range(N - 1):
#     if  arr[i] < 0 and arr[i + 1] < 0 or arr[i] > 0 and arr[i + 1] > 0:
#         print("YES")
#     else:
#         print("NO")

# f
# N = int(input())
# arr = list(map(int, input().split()))

# l = 0
# for i in range(N - 1):
#     if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]: 
#        l += 1
# print(l)


# G
N = int(input())
arr = list(map(int, input().split()))

print(*arr[::-1])