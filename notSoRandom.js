// random - takes 1 number argument and console.logs a random integer between 0 and the given number (exclusively)
const random  = function(num){
    // BONUS - default value
    num = num || 10;
    // BONUS - type checking
    if(typeof num !== "number") throw new TypeError;
    // BONUS - extra arguments
    if(arguments.length>1) throw "Too many arguments given!";

    return Math.floor(Math.random()*num);
}
// randomLetter - takes 1 string argument and console.logs a random letter from the given string
const randomLetter = function(){
   // BONUS - default value

    // BONUS - type checking

    // BONUS - extra arguments 
    if(arguments.length>1) throw "Too many arguments given!";
    
}
// myGuy - takes 1 string argument and console.logs the same string with “, my guy.” at the end of it
const myGuy = function(){
// BONUS - default value

    // BONUS - type checking

    // BONUS - extra arguments
}
// string_N_times - takes 2 arguments, a string and a number, and console.logs the string as many times as the given number
const string_N_times = function(){
// BONUS - default value

    // BONUS - type checking

    // BONUS - extra arguments
    if(arguments.length>1) throw "Too many arguments given!";
    
}
// hypotenuse - takes 2 number arguments (corresponding to the perpendicular sides of a right triangle) and console.logs the length of the 3rd side, the hypotenuse.
const hypotenuse = function(){
// BONUS - default value

    // BONUS - type checking

    // BONUS - extra arguments
    if(arguments.length>2) throw "Too many arguments given!";
    
}
