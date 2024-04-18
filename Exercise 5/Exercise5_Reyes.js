/*
GE 120{ Machine Exercise 3
Regine Ann Reyes
March 14, 2024
*/


function getLatitude(distance,azimuth) {
    /*
    Compute for latitude of a given line.

    Input {
    distance - float
    azimuth - float

    Output{
    latutude - float
    */

    var latitude = - (distance * Math.cos(azimuth * Math.PI / 180.0))

    return latitude
}
function getDeparture(distance, azimuth) {
    /*
    Compute for departure of a given line.

    Input {
    distance - float
    azimuth - float

    Output{
    departure - float
    */

    var departure = - (distance * Math.sin(azimuth * Math.PI / 180.0))

    return departure
}
function AzimuthToBearing(azimuth) {
    /*
        Compute for the DMS bearing of a given angle.

        Input {
        azimuth - float

        Output{
        bearing - string
        */
    azimuth = 
          
    if ( "-" in azimuth ) { // In DMS form
                // Convert DMS to DD
                dms = azimuth
                degrees, minutes, seconds = azimuth.split("-")
                degrees, minutes, seconds = float(degrees), float(minutes), float(seconds)
                azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 
                azimuth_uncon = azimuth // make a variable of the unconverted azimuth for lat && dep
                /*
                Identif (y the bearing && orientation of the DMS angle
                // 1st - convert azimuth to bearing in DD, &&  identif (y direction
                // 2nd - convert the DD angle from 1st to DMS
                */
                if ( azimuth > 0 && azimuth < 90 ) {
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {{ ^5} W'.format(dms)
                }    
                } else if ( azimuth > 90 && azimuth < 180 ) {
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {{ ^5} W'.format(dms)
                } else if ( azimuth > 180 && azimuth < 270 ) {
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {{ ^5} E'.format(dms)
                } else if ( azimuth > 270 && azimuth < 360 ) {
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {{ ^5} E'.format(dms)
                } else if ( azimuth == 0 ) {
                    bearing = "DUE SOUTH"
                } else if ( azimuth == 90 ) {
                    bearing = "DUE WEST"
                } else if ( azimuth == 180 ) {
                    bearing = "DUE NORTH"
                } else if ( azimuth == 270 ) {
                    bearing = "DUE EAST"
                } else ( azimuth == 360 ) 
                    bearing = "DUE SOUTH"
                return bearing, azimuth, azimuth_uncon
    
    else if { // In DD form 
                // Convert DD to DMS
                azimuth = float(azimuth) 
                azimuth = (azimuth) % 360
                azimuth_uncon = azimuth // make a variable of the unconverted azimuth for lat && dep
                /*
                Identif (y the bearing && orientation of the DD angle
                // 1st - convert azimuth to bearing in DD, &&  identif (y direction
                // 2nd - convert the DD angle from 1st to DMS
                */
                if ( azimuth > 0 && azimuth < 90{
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {{ ^5} W'.format(dms)
                else if ( azimuth > 90 && azimuth < 180{
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {{ ^5} W'.format(dms)
                else if ( azimuth > 180 && azimuth < 270{
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'N {{ ^5} E'.format(dms)
                else if ( azimuth > 270 && azimuth < 360{
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = f"{degree}-{minutes_whole}-{seconds}"
                    bearing = 'S {{ ^5} E'.format(dms)
                else if ( azimuth == 0{
                    bearing = "DUE SOUTH"
                else if ( azimuth == 90{
                    bearing = "DUE WEST"
                else if ( azimuth == 180{
                    bearing = "DUE NORTH"
                else if ( azimuth == 270{
                    bearing = "DUE EAST"
                else if ( azimuth == 360{
                    bearing = "DUE SOUTH"
    
                return bearing, azimuth, azimuth_uncon
}
//  Create a sentinel controlled loop
counter1 = 1
counter2 = 2
counter = f"{counter1}-{counter2}"
var lines = []
var distance_list =[] //list of distance to be used for compass traverse adjustment
var sumLat = 0
var sumDep = 0
var sumDist = 0  
var sumAdjLat = 0
var sumAdjDep = 0
var row = 0 // to be used in identif (ying the index of the distance in the distance_list 

//  Create a sentinel loop
var data  = [
[13.23, 124.795]
[15.57, 14.143]
[43.36, 270.000]
[23.09, 188.169]
[10.99, 180.000]
[41.40, 50.562]
]
while true {
        console.log()
        console.log("LINE NO. ", counter)    
        // Ask for distance input
        try{
            distance_input = float(input("Enter Distance{ "))
        // if ( distance is invalid, ask for input again
        except ValueError {
            console.log("INVALID{ You need to enter a number.")
            console.log()
        else {
            azimuth = input("Enter Azimuth from the South{ ")
            distance_list.push(distance_input) // add the distance input of the user to the distance list
        // Extract bearing, lat, && dep values
            bearing, azimuth, azimuth_uncon = AzimuthToBearing(azimuth)
            latitude = getLatitude(azimuth=float(azimuth_uncon), distance=float(distance_input)) 
            departure = getDeparture(azimuth=float(azimuth_uncon), distance=float(distance_input))

        // Get summation of latitude && departure
        sumLat += latitude
            // sumLat = sumLat + Lat
        sumDep += departure
            // sumDep + sumDep + Dep
        sumDist += float(distance_input)
        
        let line = [counter, distance_input, bearing, latitude, departure]  // Create a list of the line
        lines.push(line)

        // Ask for input
        YN = input("Add new line? (Y/N) ")
        if ( YN.lower() == "yes" or YN.lower() == "y"{
                counter1 += 1
                counter2 += 1
                counter = f"{counter1}-{counter2}"
                continue
        else{
                break

    // Adjust the traverse 
for line in lines {
    distance = distance_list[row]
    // Solve for correction of latitude per row
    cLat = - sumLat * (distance/sumDist)
    cDep = - sumDep * (distance/sumDist)

    // solve for adjusted latitude && departure
    latitude = line[3]
    departure = line[4]
    adjLat = latitude + cLat
    adjDep = departure + cDep
        
    // Get summation of latitude && departure
    sumAdjLat += adjLat
    sumAdjDep += adjDep
    
    adjLat = round(adjLat,7)
    adjDep = round(adjDep,7)
    // Add the adjusted latitude && departure to the table (push)
    line.push(adjLat)
    line.push(adjDep)
    row += 1
    tuple(line) // convert the list of line to a tuple
console.log()
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
console.log('{{ ^15} {{ ^15} {{ ^15} {{ ^20} {{ ^23} {{ ^23} {{ ^23} '.format("LINE NO. ", "DISTANCE ", "BEARING ", "LATITUDE ", "DEPARTURE ", "ADJUSTED LATITUDE ", "ADJUSTED DEPARTURE "))
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")

for line in lines{
    console.log('{{ ^13} {{ ^16} {{ ^16} {{ ^20} {{ ^23} {{ ^23} {{ ^23} '.format(line[0], line[1], line[2], line[3], line[4], line[5], line[6]))

console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
console.log("Summation of Latitude{ ", round(sumLat,7))
console.log("Summation of Departure{ ", round(sumDep,7))
console.log("Summation of Distance{ ", round(sumDist,3))

console.log("Summation of Adjusted Latitude{ ", round(sumAdjLat,7))
console.log("Summation of Adjusted Departure{ ", round(sumAdjDep,7))
console.log()
LEC = sqrt(sumLat**2 + sumDep**2)
console.log("LEC{ ", LEC)
REC = sumDist/LEC
console.log("REC{ 1{ ", round(REC, -3)) 

console.log()
console.log("---------------------END-----------------------")