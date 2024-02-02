console.log(" Conversion of datatype ")

// always be aware of dataTypes because we dont know which type of data type is coming to system it can be string even if it looks like number for example shown below.

let score = "33"

console.log(score + " is " + typeof score)

let age = Number(score);

console.log(age + " is " + " " +typeof age );