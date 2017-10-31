def is_isogram(string):
  lower_string = string.lower()
  for char in lower_string:
    if char.isalpha():
      if lower_string.count(char) > 1:
        return False
  return True
