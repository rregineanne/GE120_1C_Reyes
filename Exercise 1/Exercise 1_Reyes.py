"""
GE 120 Lecture 2
Machine Exercise 1
Regine Ann Reyes
February 27, 2024
"""
# PART 1: Convert dd to dms

dd = 118.42069
# extract the degree part
degree = int(dd)
print("degree:", degree)

# extract the minutes
minutes = dd - degree
minutes = (dd-degree) * 60

minutes_whole = int(minutes)

seconds = (minutes - minutes_whole) * 60

print("minutes but in degrees:",minutes)
print("minutes but whole:", minutes_whole)
print("seconds:", seconds)

# get dms value by combining the degrees, minutes, and seconds through string
print("dms value:", str(degree) + "-" + str(minutes_whole) + "-" + str(round(seconds,2)))



# PART 2: Convert dms to dd

# dms = 118-25-14.48
dms = "118-25-14.48"
values = dms.split("-")
print("list of values in dms form:", values)

# identify values from the list by splitting
degrees = int(values[0])
minutes = int(values[1])
seconds = float(values[2])

# get dd value by converting the minutes and seconds to decimal form
dd = degrees + (minutes/60) + (seconds/3600)

print("dd value:", round(dd,6))