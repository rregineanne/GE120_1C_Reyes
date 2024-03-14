"""
GE 120: Machine Exercise 2
Regine Ann Reyes
March 07, 2024
"""

# Create a sentinel controlled loop
counter = 1
lines = []

while True :
    print()
    print("LINE NO. ", counter)    
    # ssk for distance input
    try:
        distance_input = float(input("Distance: "))
    # if distance is invalid, ask for input again
    except ValueError :
        print("INVALID: You need to enter a number.")
        print()
    else :
        azimuth = input("Azimuth from the South: ")

        if "-" in azimuth : # in DMS form
            # convert DMS to DD
            dms = azimuth
            degrees, minutes, seconds = azimuth.split("-")
            degrees, minutes, seconds = float(degrees), float(minutes), float(seconds)
            azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 

            # identify the bearing and orientation of the decimal degree angle
            if azimuth > 0 and azimuth < 90:
                bearing = 'S {: ^5} W'.format(dms)
            elif azimuth > 90 and azimuth < 180:
                azimuth = 180 - azimuth
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'N {: ^5} W'.format(dms)
            elif azimuth > 180 and azimuth < 270:
                azimuth = azimuth - 180
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'N {: ^5} E'.format(dms)
            elif azimuth > 270 and azimuth < 360:
                azimuth = 360 - azimuth
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'S {: ^5} E'.format(dms)
            elif azimuth == 0:
                bearing = "DUE SOUTH"
            elif azimuth == 90:
                bearing = "DUE WEST"
            elif azimuth == 180:
                bearing = "DUE NORTH"
            elif azimuth == 270:
                bearing = "DUE EAST"
            elif azimuth == 360:
                bearing = "DUE SOUTH"

        else : # in DD form 
            # convert DD to DMS
            azimuth = float(azimuth)
           
            # identify the bearing and orientation of the decimal degree angle
            if azimuth > 0 and azimuth < 90:
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'S {: ^5} W'.format(dms)
            elif azimuth > 90 and azimuth < 180:
                azimuth = 180 - azimuth
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'N {: ^5} W'.format(dms)
            elif azimuth > 180 and azimuth < 270:
                azimuth = azimuth - 180
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'N {: ^5} E'.format(dms)
            elif azimuth > 270 and azimuth < 360:
                azimuth = 360 - azimuth
                azimuth = float(azimuth)
                degree = int(azimuth)
                minutes = (azimuth - degree) * 60
                minutes_whole = int(minutes)
                seconds = (minutes - minutes_whole) * 60
                seconds = float(seconds)
                seconds = round(seconds, 2)
                dms = f"{degree}-{minutes_whole}-{seconds}"
                bearing = 'S {: ^5} E'.format(dms)
            elif azimuth == 0:
                bearing = "DUE SOUTH"
            elif azimuth == 90:
                bearing = "DUE WEST"
            elif azimuth == 180:
                bearing = "DUE NORTH"
            elif azimuth == 270:
                bearing = "DUE EAST"
            elif azimuth == 360:
                bearing = "DUE SOUTH"
 
        line = (counter,distance_input,bearing) # create tuple of the line
        lines.append(line)

        # Ask for input
        YN = input("Add new line? (Y/N) ")
        if YN.lower() == "yes" or YN.lower() == "y" :   
            counter = counter + 1
            continue
        else:
            break

print("\n\nlines")
print('{: ^10} {: ^10} {: ^10}'.format("LINE NO. ", "DISTANCE ", "BEARING "))
for line in lines :
    print('{: ^10} {: ^10} {: ^10}'.format(line[0],line[1],line[2]))

print("----END----")
