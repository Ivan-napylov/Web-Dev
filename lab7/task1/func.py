# a

# def min_of_four(a: int, b: int, c: int, d: int) -> int:
#     return min(a, b, c, d)

# a, b, c, d = map(int, input().split())

# print(min_of_four(a, b, c, d))

# b

# def rec(a, b):
#     if b == 0:
#         return 1
#     return a * rec(a, b - 1)

# a, b = map(float, input().split())
# b = int(b)

# print(rec(a, b))


# c
def xor(x: int, y: int) -> int:
    return x ^ y  # Побитовая операция XOR

x, y = map(int, input().split())  # Ввод двух чисел 0 или 1
print(xor(x, y))  # Вывод результата
