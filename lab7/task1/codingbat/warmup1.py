def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False


def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2

def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

