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
    if (azimuth % 180 == 90) {return 0} else {    
    return (-distance * Math.cos(azimuth * Math.PI / 180.0))}
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
    if (azimuth & 180 == 0) {return 0} else {
    return (-distance * Math.sin(azimuth * Math.PI / 180.0))}
}

function AzimuthToBearing(azimuth) {
    /*
        Compute for the DMS bearing of a given angle.

        Input {
        azimuth - float

        Output{
        bearing - string
        */          
    if (azimuth.includes("-")) { // In DMS form
                // Convert DMS to DD
                let dms = azimuth
                let [degrees, minutes, seconds] = azimuth.split("-")
                degrees, minutes, seconds = float(degrees), float(minutes), float(seconds)
                azimuth = (degrees+(minutes/60)+(seconds/3600)) % 360 
                let azimuth_uncon = azimuth // make a variable of the unconverted azimuth for lat and dep
                /*
                Identify the bearing and orientation of the DMS angle
                // 1st - convert azimuth to bearing in DD, &&  identif (y direction
                // 2nd - convert the DD angle from 1st to DMS
                */
                if ( azimuth > 0 && azimuth < 90 ) {
                    let degree = int(azimuth)
                    let minutes = (azimuth - degree) * 60
                    let minutes_whole = int(minutes)
                    let seconds = round(float((minutes - minutes_whole) * 60),2)
                    let dms = '${degree}-${minutes_whole}-${seconds}' // Following the JavaScript for string interpolation
                    let bearing = 'S ${dms} W'
                } else if ( azimuth > 90 && azimuth < 180 ) {
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = (float((minutes - minutes_whole) * 60).toPrecision(2))
                    dms = '${degree}-${minutes_whole}-${seconds}' // Following the JavaScript for string interpolation
                    bearing = 'N ${dms} W'
                } else if ( azimuth > 180 && azimuth < 270 ) {
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = (float((minutes - minutes_whole) * 60).toPrecision(2))
                    dms = '${degree}-${minutes_whole}-${seconds}' // Following the JavaScript for string interpolation
                    bearing = 'N ${dms} E'
                } else if ( azimuth > 270 && azimuth < 360 ) {
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = (float((minutes - minutes_whole) * 60).toPrecision(2))
                    dms = '${degree}-${minutes_whole}-${seconds}' // Following the JavaScript for string interpolation
                    bearing = 'S ${dms} E'
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
                
                return [bearing, azimuth, azimuth_uncon]}
    
    else { // In DD form 
                // Convert DD to DMS
                azimuth = float(azimuth) 
                azimuth = (azimuth) % 360
                let azimuth_uncon = azimuth // make a variable of the unconverted azimuth for lat and dep
                /*
                Identify the bearing and orientation of the DD angle
                // 1st - convert azimuth to bearing in DD, and  identify direction
                // 2nd - convert the DD angle from 1st to DMS
                */
                if ( azimuth > 0 && azimuth < 90 ) {
                    let degree = int(azimuth)
                    let minutes = (azimuth - degree) * 60
                    let minutes_whole = int(minutes)
                    let seconds = (float((minutes - minutes_whole) * 60).toPrecision(2))
                    let dms = '${degree}-${minutes_whole}-${seconds}'
                    bearing = 'S ${dms} W'
                } else if ( azimuth > 90 && azimuth < 180 ) {
                    azimuth = 180 - azimuth
                    azimuth = float(azimuth)
                    let degree = int(azimuth)
                    let minutes = (azimuth - degree) * 60
                    let minutes_whole = int(minutes)
                    let seconds = (float((minutes - minutes_whole) * 60).toPrecision(2))
                    dms = '${degree}-${minutes_whole}-${seconds}'
                    bearing = 'N ${dms} W'
                } else if ( azimuth > 180 && azimuth < 270 ) {
                    azimuth = azimuth - 180
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = '${degree}-${minutes_whole}-${seconds}'
                    bearing = 'N ${dms} E'
                } else if ( azimuth > 270 && azimuth < 360 ) {
                    azimuth = 360 - azimuth
                    azimuth = float(azimuth)
                    degree = int(azimuth)
                    minutes = (azimuth - degree) * 60
                    minutes_whole = int(minutes)
                    seconds = round(float((minutes - minutes_whole) * 60),2)
                    dms = '${degree}-${minutes_whole}-${seconds}'
                    bearing = 'S ${dms} E'
                } else if ( azimuth == 0 ) {
                    bearing = "DUE SOUTH"
                } else if ( azimuth == 90 ) {
                    bearing = "DUE WEST"
                } else if ( azimuth == 180 ) {
                    bearing = "DUE NORTH"
                } else if ( azimuth == 270 ) {
                    bearing = "DUE EAST"
                } else if ( azimuth == 360 ){
                    bearing = "DUE SOUTH"
                } 
                return [bearing, azimuth, azimuth_uncon]
}

    //  Create a sentinel controlled loop
    counter1 = 1
    counter2 = 2
    counter = '${counter1}-${counter2}'
    var lines = []
    var distance_list =[] //list of distance to be used for compass traverse adjustment
    var sumLat = 0
    var sumDep = 0
    var sumDist = 0  
    var sumAdjLat = 0
    var sumAdjDep = 0
    var row = 0 // to be used in identifying the index of the distance in the distance_list 

    //  Create a sentinel loop
    var data  = [
    [13.23, 124.795]
    [15.57, 14.143]
    [43.36, 270.000]
    [23.09, 188.169]
    [10.99, 180.000]
    [41.40, 50.562]
    ]

    for (var i = 0; i < data.length; i++) {
        let line = data [i]
        let distance = line[0]
        let azimuth = line[1]
        let bearing = AzimuthToBearing(azimuth)
        let latitude = getLatitude(distance, azimuth)
        let departure = getDeparture(distance, azimuth)

        // Get summation of latitude && departure
        sumLat += latitude
        // sumLat = sumLat + Lat
        sumDep += departure
        // sumDep + sumDep + Dep
        sumDist += float(distance)

        lines.push([(i+1), distance, bearing, latitude, departure])
    }
        // Adjust the traverse 
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i]
            let distance = distance_list[row]
            // Solve for correction of latitude per row
            let cLat = - sumLat * (distance/sumDist)
            let cDep = - sumDep * (distance/sumDist)

            // solve for adjusted latitude and departure
            let latitude = line[3]
            let departure = line[4]
            let adjLat = latitude + cLat
            let adjDep = departure + cDep
                
            // Get summation of latitude && departure
            sumAdjLat += adjLat
            sumAdjDep += adjDep
            
            adjLat = (adjLat.toPrecision(5))
            adjDep = (adjDep.toPrecision(5))
            // Add the adjusted latitude && departure to the table (push)
            line.push(adjLat)
            line.push(adjDep)
            row += 1
    }

    console.log()
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
    console.log("LINE NO. ".padEnd(15), "DISTANCE ".padEnd(15), "BEARING ".padEnd(15), "LATITUDE ".padEnd(15), "DEPARTURE ".padEnd(15), "ADJUSTED LATITUDE ".padEnd(15), "ADJUSTED DEPARTURE ".padEnd(15))
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")

    for (var line of lines) {
        console.log(line[0].toString().padEnd(13), line[1].toString().padEnd(16), line[2].toString().padEnd(16), line[3].toString().padEnd(20), line[4].toString().padEnd(23), line[5].toString().padEnd(23), line[6].toString().padEnd(23))
    }

console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
console.log("Summation of Latitude{ ", sumLat.toPrecision(5))
console.log("Summation of Departure{ ", sumDep.toPrecision(5))
console.log("Summation of Distance{ ", sumDist.toPrecision(5))

console.log("Summation of Adjusted Latitude{ ", sumAdjLat.toPrecision(5))
console.log("Summation of Adjusted Departure{ ", sumAdjDep.toPrecision(5))
console.log()
let LEC = Math.sqrt(sumLat**2 + sumDep**2)
console.log("LEC: ", LEC)
let REC = sumDist/LEC
console.log("1: ", (Math.floor(REC/1000)*1000).toPrecision(-3))

}