"""
GE 120: Machine Exercise 4
Regine Ann Reyes
April 11, 2024
"""

from math import cos, sin, radians, sqrt
# Get from Google

class Line:
    def __init__(self, distance, azimuth):
        self.distance = distance
        self.azimuth = azimuth

    def latitude(self):
        '''
        Compute for latitude of a given line.

        Input :
        distance - float
        azimuth - float

        Output:
        latutude - float
        '''

        latitude = -float(self.distance) * cos(radians(self.azimuth))

        return latitude
    
    def departure(self):
        '''
        Compute for departure of a given line.

        Input :
        distance - float
        azimuth - float

        Output:
        departure - float
        '''

        departure = -float(self.distance) * sin(radians(self.azimuth))

        return departure

    def bearing(self): 
        '''
        Compute for the DMS bearing of a given angle.

        Input :
        azimuth - float

        Output:
        bearing - string
        '''
        if "-" in str(self.azimuth) : # In DMS form
                # Convert DMS to DD
                dms = self.azimuth
                degrees, minutes, seconds = self.azimuth.split("-")
                degrees, minutes, seconds = float(degrees), float(minutes), float(seconds)
                azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 
                azimuth_uncon = azimuth # make a variable of the unconverted azimuth for lat and dep
                '''
                Identify the bearing and orientation of the DMS angle
                Input :
                azimuth - string
                Steps:
                # 1 - convert azimuth to bearing in DD, and  identify direction
                # 2 - convert the DD angle from 1st to DMS
                Output :
                bearing - string
                '''
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
                
                return bearing
    
        else : # In DD form 
                # Convert DD to DMS
                azimuth = float(self.azimuth) 
                azimuth = (azimuth) % 360
                azimuth_uncon = azimuth # make a variable of the unconverted azimuth for lat and dep
                '''
                Identify the bearing and orientation of the DD angle
                Input :
                azimuth - float
                Steps:
                # 1 - convert azimuth to bearing in DD, and  identify direction
                # 2 - convert the DD angle from 1st to DMS
                Output :
                bearing - string
                '''
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
    
                return bearing
    
class Cardinal(Line):
    def __init__(self, distance, azimuth):
          super().__init__(distance, azimuth)
    
    def bearing(self):
        if self.azimuth == 0:
            bearing = "DUE SOUTH"
        elif self.azimuth == 90:
            bearing = "DUE WEST"
        elif self.azimuth == 180:
            bearing = "DUE NORTH"
        elif self.azimuth == 270:
            bearing = "DUE EAST"
        elif self.azimuth == 360:
            bearing = "DUE SOUTH"
        return bearing

# Create a sentinel controlled loop
counter1 = 1
counter2 = 2
counter = f"{counter1}-{counter2}"
lines = []
distance_list =[] #list of distance to be used for compass traverse adjustment
sumLat = 0
sumDep = 0
sumDist = 0  
sumAdjLat = 0
sumAdjDep = 0
row = 0 # to be used in identifying the index of the distance in the distance_list 

while True :
        print()
        print("LINE NO. ", counter)    
        # Ask for distance input
        try:
            distance = float(input("Enter Distance: "))
        # If distance is invalid, ask for input again
        except ValueError :
            print("INVALID: You need to enter a number.")
            print()
        else :
            azimuth = input("Enter Azimuth from the South: ")
            if "-" in azimuth : # In DMS form
                    # Convert DMS to DD
                    dms = azimuth
                    degrees, minutes, seconds = azimuth.split("-")
                    degrees, minutes, seconds = int(degrees), float(minutes), float(seconds)
                    azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 
            distance_list.append(distance) # add the distance input of the user to the distance list

        if float(azimuth) % 90 == 0:
            line = Cardinal(distance, azimuth) 
        else:
            line = Line(distance,azimuth)

        # Get summation of latitude and departure
        sumLat += line.latitude()
            # sumLat = sumLat + Lat
        sumDep += line.departure()
            # sumDep + sumDep + Dep
        sumDist += float(line.distance)
        
        # Append the attributes under the cardinal to make the table
        lines.append((counter, line.distance, line.bearing(), line.latitude(), line.departure(),))

        # Ask for input
        YN = input("Add new line? (Y/N) ")
        if YN.lower() == "yes" or YN.lower() == "y":
                counter1 += 1
                counter2 += 1
                counter = f"{counter1}-{counter2}"
                continue
        else:
                break

    # Adjust the traverse 
for line in lines :
    distance = distance_list[row]
    # Solve for correction of latitude per row
    cLat = - sumLat * (distance/sumDist)
    cDep = - sumDep * (distance/sumDist)

    # solve for adjusted latitude and departure
    latitude = line[3]
    departure = line[4]
    adjLat = latitude + cLat
    adjDep = departure + cDep

    # Get summation of latitude and departure
    sumAdjLat += adjLat
    sumAdjDep += adjDep
    
    adjLat = round(adjLat,7)
    adjDep = round(adjDep,7)
    # Add the adjusted latitude and departure to the table (append)
    updated_line = line + (adjLat, adjDep)
    lines[row] = updated_line
    row += 1

print()
print("-----------------------------------------------------------------------------------------------------------------------------------------------")
print('{: ^15} {: ^15} {: ^15} {: ^20} {: ^23} {: ^23} {: ^23} '.format("LINE NO. ", "DISTANCE ", "BEARING ", "LATITUDE ", "DEPARTURE ", "ADJUSTED LATITUDE ", "ADJUSTED DEPARTURE "))
print("-----------------------------------------------------------------------------------------------------------------------------------------------")

# Print the adjusted lines
for line in lines:
    print('{: ^13} {: ^16} {: ^16} {: ^20} {: ^23} {: ^23} {: ^23} '.format(line[0], line[1], line[2], line[3], line[4], line[5], line[6]))

print("-----------------------------------------------------------------------------------------------------------------------------------------------")
print("Summation of Latitude: ", round(sumLat,7))
print("Summation of Departure: ", round(sumDep,7))
print("Summation of Distance: ", round(sumDist,3))

print("Summation of Adjusted Latitude: ", round(sumAdjLat,7))
print("Summation of Adjusted Departure: ", round(sumAdjDep,7))
print()
LEC = sqrt(sumLat**2 + sumDep**2)
print("LEC: ", LEC)
REC = sumDist/LEC
print("REC: 1: ", round(REC, -3)) 

print()
print("---------------------END-----------------------")