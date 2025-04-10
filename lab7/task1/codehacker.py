# 1 
# https://www.hackerrank.com/challenges/py-hello-world/problem?isFullScreen=true
# print("Hello, World!")

# 2
# https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true
# def check_weird(n):
#     if n % 2 == 1:
#         print("Weird")
#     elif 2 <= n <= 5:
#         print("Not Weird")
#     elif 6 <= n <= 20:
#         print("Weird")
#     else: 
#         print("Not Weird")


# n = int(input())
# check_weird(n)



# 3
# https://www.hackerrank.com/challenges/python-arithmetic-operators/problem?isFullScreen=true
# a = int(input())
# b = int(input())


# print(a + b)
# print(a - b)
# print(a * b) 


# 4
# https://www.hackerrank.com/challenges/python-division/problem?isFullScreen=true

# a = int(input())
# b = int(input())

# print(a // b)
# print(a / b)

# 5
# https://www.hackerrank.com/challenges/python-loops/problem?isFullScreen=true
# a = int(input())

# for i in range(a):
#     print(i**2)

# 6
# https://www.hackerrank.com/challenges/python-print/problem?isFullScreen=true

# n = int(input())

# print("".join(map(str, range(1, n + 1))))

# 7
# https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true


# n = int(input())


# student_marks = {}


# for _ in range(n):
#     data = input().split()
#     name = data[0] 
#     marks = list(map(float, data[1:]))
#     student_marks[name] = marks


# query_name = input()


# average = sum(student_marks[query_name]) / len(student_marks[query_name])
# print(f"{average:.2f}")

# 8
# https://www.hackerrank.com/challenges/text-wrap/problem?isFullScreen=true

# import textwrap

# def wrap(str, w):
#     return "\n".join(textwrap.wrap(str, w))


# str = input()
# w = int(input())

# print(wrap(str, w))
