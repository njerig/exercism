def is_leap_year(year):
  def is_divisible_by(n):
    return year % n == 0
  return is_divisible_by(400) or (is_divisible_by(4) and not is_divisible_by(100))
