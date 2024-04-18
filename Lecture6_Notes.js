/*
Lecture 6: Notes
*/

// console.log("Hello!")

// creating variables
let x = 5
var y = 6
const z = 7

// console.log(x,y,z)

// if statements 
if (x == y) {
    // console.log(x.toString().concat(" is equal to "), y.toString())
} else if (x == z) {
    // console.log(x.toString().concat(" is not equal to "), z.toString())
} else {
    // console.log(x.toString().concat(" is not equal to anything "))
}

const students = ["peter", "maja", "aj", "quinmar"]
// console.log(students.length)

//  comparing two values and data types
console.log(5 == "5")
console.log(5 === "5")

// for(var i = 0; i < z; i++) {
//     console.log(i)
// }

// for(var i = 8; i > z; i++) {
//     console.log(i)
// }

for(var student of students) {
    // console.log(student)
}

function degreesToRadians(num) {
    var value = num * Math.PI / 180
    return value
}
// console.log(degreesToRadians(180))

function getLatitude(distance, azimuth) {
    var latitude = -distance * Math.cos(degreesToRadians(azimuth))
    return latitude
}
// console.log(getLatitude(12, 50))