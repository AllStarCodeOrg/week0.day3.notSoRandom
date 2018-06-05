// random - takes 1 number argument and console.logs a random integer between 0 and the given number (exclusively)
const random = function (num) {
    // BONUS - default value
    // num = num || 10;
    // BONUS - type checking
    // if (typeof num !== "number") throw new TypeError;
    // BONUS - extra arguments
    // if (arguments.length > 1) throw "Too many arguments given!";
    console.log(Math.floor(Math.random() * num));
}
// randomLetter - takes 1 string argument and console.logs a random letter from the given string
const randomLetter = function (str) {
    // BONUS - default value
    // str = str || "abcdefghijklmnopqrstuvwxyz";
    // BONUS - type checking
    // if (typeof str !== "string") throw new TypeError;
    // BONUS - extra arguments 
    // if (arguments.length > 1) throw "Too many arguments given!";
    
    // You can treat a string like an array of single characters and use indexing!
    console.log(str[random(str.length)]);
}
// myGuy - takes 1 string argument and console.logs the same string with “, my guy.” at the end of it
const myGuy = function (str) {
    // BONUS - default value
    // str = str || "Take is easy";
    // BONUS - type checking
    // if (typeof str !== "string") throw new TypeError;
    // BONUS - extra arguments
    // if (arguments.length > 1) throw "Too many arguments given!";
    console.log(str + ", my guy.");
    // console.log(`${str}, my guy.`); // same thing using string interpolation
}
// string_N_times - takes 2 arguments, a string and a number, and console.logs the string as many times as the given number
const string_N_times = function (str, num) {
    // BONUS - default value
    // str = str || "blah";
    // num = num || 5;
    // BONUS - type checking
    // if (typeof str !== "string" || typeof num !== "number") throw new TypeError;
    // BONUS - extra arguments
    // if (arguments.length > 2) throw "Too many arguments given!";
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}
// hypotenuse - takes 2 number arguments (corresponding to the perpendicular sides of a right triangle) and console.logs the length of the 3rd side, the hypotenuse.
const hypotenuse = function (a, b) {
    // BONUS - default value
    // a = a || 3;
    // b = b || 4;
    // BONUS - type checking
    // if (typeof a !== "number" || typeof b !== "number") throw TypeError;
    // BONUS - extra arguments
    // if (arguments.length > 2) throw "Too many arguments given!";
    console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}
