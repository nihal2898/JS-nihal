console.log(" Conversion of datatype ")

// always be aware of dataTypes because we dont know which type of data type is coming to system it can be string even if it looks like number for example shown below.

// let score = "33"

// console.log(score + " is " + typeof score)

// let age = Number(score);

// console.log(age + " is " + " " +typeof age );

console.log(1 + 2 + 2); //5
console.log(" 1 " + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log((1+2) + "2"); // 32

//if we print any result and while giving the values for summing it up as (string + number) it wil consider whole values as string as the string is in front.
//BUT if we do summing up as(Number + Number + String) it will add the numbers and then it will add the remaining string in the ans. as shown in the above example.