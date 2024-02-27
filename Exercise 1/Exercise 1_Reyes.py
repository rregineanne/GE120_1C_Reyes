"""
GE 120 Introduction Lecture 2
Regine Ann Reyes
February 27, 2024
"""

# convert dd to dms
dd = 118.42069
# extract the degree part
degree = int(dd)
# print("degree:", degree)

# extract the minutes
# minutes = dms - degree
minutes = (dd-degree) * 60

minutes_whole = int(minutes)

seconds = (minutes - minutes_whole) * 60

# print("minutes but in degrees:",minutes)
# print("minutes", minutes_whole)
# print("seconds:", seconds)
# print("dms:" + str(degree) + "-" + str(minutes_whole) + "-" + str(round(seconds,2)))

# convert dms to dd
# dms = 118-25-14.48
dms = "118-25-14.48"
values = dms.split("-")

degrees = int(values[0])
minutes = int(values[1])
seconds = float(values[2])

dd = degrees + (minutes/60) + (seconds/3600)

print("dd value:", round(dd,6))