"""
GE 120: Machine Exercise 3
Regine Ann Reyes
March 14, 2024
"""

from math import cos, sin, radians, sqrt
# Get from Google

def getLatitude(distance,azimuth) :
    '''
    Compute for latitude of a given line.

    Input :
    distance - float
    azimuth - float

    Output:
    latutude - float
    '''

    latitude = - distance * cos(radians(azimuth))

    return latitude

def getDeparture(distance, azimuth) :
    '''
    Compute for departure of a given line.

    Input :
    distance - float
    azimuth - float

    Output:
    departure - float
    '''

    departure = - distance * sin(radians(azimuth))

    return departure

def AzimuthToBearing(azimuth) :
    '''
        Compute for the DMS bearing of a given angle.

        Input :
        azimuth - float

        Output:
        bearing - string
        '''
    if "-" in azimuth : # In DMS form
                # Convert DMS to DD
                dms = azimuth
                degrees, minutes, seconds = azimuth.split("-")
                degrees, minutes, seconds = float(degrees), float(minutes), float(seconds)
                azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 

                # Identify the bearing and orientation of the DMS angle
                # 1st - convert azimuth to bearing in DD, and  identify direction
                # 2nd - convert the DD angle from 1st to DMS
                if azimuth > 0 and azimuth < 90:
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {: ^5} W'.format(dms)
                elif azimuth > 90 and azimuth < 180:
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {: ^5} W'.format(dms)
                elif azimuth > 180 and azimuth < 270:
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {: ^5} E'.format(dms)
                elif azimuth > 270 and azimuth < 360:
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
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
                return bearing, azimuth
    
    else : # In DD form 
                # Convert DD to DMS
                azimuth = float(azimuth) 
                azimuth = (azimuth) % 360

                # Identify the bearing and orientation of the DD angle
                # 1st - convert azimuth to bearing in DD, and  identify direction
                # 2nd - convert the DD angle from 1st to DMS
                if azimuth > 0 and azimuth < 90:
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {: ^5} W'.format(dms)
                elif azimuth > 90 and azimuth < 180:
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {: ^5} W'.format(dms)
                elif azimuth > 180 and azimuth < 270:
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {: ^5} E'.format(dms)
                elif azimuth > 270 and azimuth < 360:
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
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
    
                return bearing, azimuth

# Create a sentinel controlled loop
counter1 = 1
counter2 = 2
counter = f"{counter1}-{counter2}"
lines = []
sumLat = 0
sumDep = 0
sumDist = 0  

while True :
        print()
        print("LINE NO. ", counter)    
        # Ask for distance input
        try:
            distance_input = float(input("Enter Distance: "))
        # If distance is invalid, ask for input again
        except ValueError :
            print("INVALID: You need to enter a number.")
            print()
        else :
            azimuth = input("Enter Azimuth from the South: ")

        # Extract bearing, lat, and dep values
            bearing, azimuth = AzimuthToBearing(azimuth)
            latitude = getLatitude(azimuth=float(azimuth), distance=float(distance_input)) 
            departure = getDeparture(azimuth=float(azimuth), distance=float(distance_input))

        # Get summation of latitude and departure
        sumLat += latitude
            # sumLat = sumLat + Lat
        sumDep += departure
            # sumDep + sumDep + Dep
        sumDist += float(distance_input)
        # Adjust the traverse 
        constCorrLat = sumLat/sumDist
        constCorrDep = sumDep/sumDist

    #    for line in lines:
    #    cLat = constCorrLat * line[1]
    #    cDep = constCorrDep * line[1]

    #    adjLat = line[3] + cLat
    #    adjDep = line[4] + cDep

        line = (counter, distance_input, bearing, latitude, departure)  # Create tuple of the line
        lines.append(line)

    #    lat = getLatitude(12, 160)
    #    dep = getDeparture(12, 160)
    #    print(lat)
    #    print(dep)

        # Ask for input
        YN = input("Add new line? (Y/N) ")
        if YN.lower() == "yes" or YN.lower() == "y":
                counter1 += 1
                counter2 += 1
                counter = f"{counter1}-{counter2}"
                continue
        else:
                break

print()
print("--------------------------------------------------------------------------------------------")
print('{: ^15} {: ^15} {: ^15} {: ^20} {: ^20} '.format("LINE NO. ", "DISTANCE ", "BEARING ", "LATITUDE ", "DEPARTURE "))
print("--------------------------------------------------------------------------------------------")

for line in lines:
    print('{: ^13} {: ^16} {: ^16} {: ^20} {: ^20} '.format(line[0], line[1], line[2], line[3], line[4]))

print("--------------------------------------------------------------------------------------------")
print("Summation of Latitude: ", round(sumLat,6))
print("Summation of Departure: ", round(sumDep,6))
print("Summation of Distance: ", round(sumDist,3))

LEC = sqrt(sumLat**2 + sumDep**2)
print("LEC: ", LEC)
REC = sumDist/LEC
print("REC: 1: ", round(REC, -3)) # round off pa


print("---------------------END-----------------------")