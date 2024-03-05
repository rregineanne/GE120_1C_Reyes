"""
GE 120: Machine Exercise 1
Regine Ann Reyes
February 27, 2024
"""
# PART 1: Convert DD to DMS

# input a decimal degree value
DD = float(input("Enter Decimal Degree (Ex. 118.42069): "))

# extract the degree part
degree = int(DD)
print("degree:", degree)

# extract the minutes
minutes = DD - degree
minutes = (DD-degree) * 60
minutes_whole = int(minutes)
print("minutes but in degrees:", minutes)
print("minutes but whole:", minutes_whole)

# extract the seconds
seconds = (minutes - minutes_whole) * 60
print("seconds:", seconds)

# get dms value by combining the degrees, minutes, and seconds through string
print("Degree, Minute, and Second Value:", str(degree) + "-" + str(minutes_whole) + "-" + str(round(seconds,2)))


# PART 2: Convert DMS to DD

# input a degree, minute, and second value
DMS = input("Enter Degree, Minute, and Second Value (Ex. 118-25-14.48): ")
values = DMS.split("-")
print("list of values in dms form:", values)

# identify values from the list by splitting
degrees = int(values[0])
minutes = int(values[1])
seconds = float(values[2])

# decimal
# get dd value by converting the minutes and seconds to decimal form
dd = degrees + (minutes/60) + (seconds/3600)
print("Decimal Degree Value:", round(dd,6))