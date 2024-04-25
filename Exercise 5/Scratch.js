/*
GE 120 Machine Exercise 3
Regine Ann Reyes
March 14, 2024
*/

function getLatitude(distance, azimuth) {
    /*
    Compute for latitude of a given line.

    Input {
    distance - float
    azimuth - float

    Output{
    latutude - float
    */
    if (azimuth % 180 == 90) {
        return 0;
    } else {
        return (-distance * Math.cos(azimuth * Math.PI / 180.0));
    }
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
    if (azimuth % 180 == 0) {
        return 0;
    } else {
        return (-distance * Math.sin(azimuth * Math.PI / 180.0));
    }
}
function AzimuthToBearing(azimuth) {
    let bearing, azimuth_uncon, degree, dms;

    if (String(azimuth).includes("-")) { // In DMS form
        // Convert DMS to DD
        let [degrees, minutes, seconds] = azimuth.split("-").map(parseFloat);
        azimuth = (degrees + (minutes / 60) + (seconds / 3600)) % 360;
        azimuth_uncon = azimuth;

        // Identify the bearing and orientation of the DMS angle
        if (azimuth > 0 && azimuth < 90) {
            degree = Math.floor(azimuth);
            let minutes = (azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "S"+dms+"W";
        } else if (azimuth >= 90 && azimuth < 180) {
            degree = Math.floor(180 - azimuth);
            let minutes = (180 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N"+dms+"W";
        } else if (azimuth >= 180 && azimuth < 270) {
            degree = Math.floor(azimuth - 180);
            let minutes = (azimuth - 180 - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N"+dms+"E";
        } else if (azimuth >= 270 && azimuth < 360) {
            degree = Math.floor(360 - azimuth);
            let minutes = (360 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "S"+dms+"E";
        } else if (azimuth === 0 || azimuth === 360) {
            bearing = "DUE SOUTH";
        } else if (azimuth === 90) {
            bearing = "DUE WEST";
        } else if (azimuth === 180) {
            bearing = "DUE NORTH";
        } else if (azimuth === 270) {
            bearing = "DUE EAST";
        }
    } else { // In DD form
        azimuth = parseFloat(azimuth) % 360;
        azimuth_uncon = azimuth;

        // Identify the bearing and orientation of the DD angle
        if (azimuth > 0 && azimuth < 90) {
            degree = Math.floor(azimuth);
            let minutes = (azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            let dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "S"+dms+"W";
        } else if (azimuth >= 90 && azimuth < 180) {
            degree = Math.floor(180 - azimuth);
            let minutes = (180 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = parseFloat(((minutes - minutes_whole) * 60).toPrecision(2));
            let dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N"+dms+"W";
        } else if (azimuth >= 180 && azimuth < 270) {
            degree = Math.floor(azimuth - 180);
            let minutes = (azimuth - 180 - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = (parseFloat((minutes - minutes_whole) * 60).toPrecision(2));
            let dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "N"+dms+"E";
        } else if (azimuth >= 270 && azimuth < 360) {
            degree = Math.floor(360 - azimuth);
            let minutes = (360 - azimuth - degree) * 60;
            let minutes_whole = Math.floor(minutes);
            let seconds = (parseFloat((minutes - minutes_whole) * 60).toPrecision(2));
            let dms = degree+"-"+minutes_whole+"-"+seconds; 
            bearing = "S"+dms+"E";
        } else if (azimuth === 0 || azimuth === 360) {
            bearing = "DUE SOUTH";
        } else if (azimuth === 90) {
            bearing = "DUE WEST";
        } else if (azimuth === 180) {
            bearing = "DUE NORTH";
        } else if (azimuth === 270) {
            bearing = "DUE EAST";
        }
    }

    // Return bearing and unconverted azimuth
    return [bearing, azimuth, azimuth_uncon];
}


// Create a sentinel controlled loop
let counter1 = 1;
let counter2 = 2;
let counter = '${counter1}-${counter2}';
let lines = [];
let distance_list = []; //list of distance to be used for compass traverse adjustment
let sumLat = 0;
let sumDep = 0;
let sumDist = 0;
let sumAdjLat = 0;
let sumAdjDep = 0;
let row = 0;

let data = [
    [13.23, 124.795],
    [15.57, 14.143],
    [43.36, 270.000],
    [23.09, 188.169],
    [10.99, 180.000],
    [41.40, 50.562]
];

for (let i = 0; i < data.length; i++) {
    let line = data[i];
    let distance = line[0];
    let azimuth = line[1];
    let bearing = AzimuthToBearing(azimuth);
    let latitude = getLatitude(distance, azimuth);
    let departure = getDeparture(distance, azimuth);

    // Get summation of latitude && departure
    sumLat += latitude;
    sumDep += departure;
    sumDist += parseFloat(distance);

    lines.push([(i + 1), distance, bearing, latitude, departure]);
}

// Adjust the traverse 
for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let distance = distance_list[row];
    // Solve for correction of latitude per row
    let cLat = -sumLat * (distance / sumDist);
    let cDep = -sumDep * (distance / sumDist);

    // solve for adjusted latitude and departure
    let latitude = line[3];
    let departure = line[4];
    let adjLat = latitude + cLat;
    let adjDep = departure + cDep;

    // Get summation of latitude && departure
    sumAdjLat += adjLat;
    sumAdjDep += adjDep;

    adjLat = (adjLat.toPrecision(5));
    adjDep = (adjDep.toPrecision(5));
    // Add the adjusted latitude && departure to the table (push)
    line.push(adjLat);
    line.push(adjDep);
    row += 1;
}

console.log()
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
console.log("LINE NO. ".padEnd(15), "DISTANCE ".padEnd(15), "BEARING ".padEnd(15), "LATITUDE ".padEnd(20), "DEPARTURE ".padEnd(22), "ADJUSTED LATITUDE ".padEnd(22), "ADJUSTED DEPARTURE ".padEnd(22))
console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")

for (var line of lines) {
    console.log(line[0].toString().padEnd(15), line[1].toString().padEnd(16), line[2].toString().padEnd(16), line[3].toString().padEnd(20), line[4].toString().padEnd(22), line[5].toString().padEnd(22), line[6].toString().padEnd(22))
}

console.log("-----------------------------------------------------------------------------------------------------------------------------------------------")
console.log("Summation of Latitude: ", sumLat.toPrecision(5))
console.log("Summation of Departure: ", sumDep.toPrecision(5))
console.log("Summation of Distance: ", sumDist.toPrecision(5))

console.log("Summation of Adjusted Latitude: ", sumAdjLat.toPrecision(5))
console.log("Summation of Adjusted Departure: ", sumAdjDep.toPrecision(5))
console.log()
let LEC = Math.sqrt(sumLat ** 2 + sumDep ** 2);
console.log("LEC: ", LEC);
let REC = sumDist / LEC;
console.log("1: ", Math.floor(REC / 1000) * 1000);
