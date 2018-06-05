# week0.day3.notSoRandom

## Instructions
1. Create a Repo on GitHub named "notSoRandom"
   - Remember to initialize it with a README.md
2. In command line, navigate to your “Documents” Folder:
   - Clone the repo to your computer using `git clone {url}`
3. Inside of this repo, create a file called “notSoRandom.js”
4. Inside of this file, create the following 5 functions:
   - `random` - takes 1 number argument and console.logs a random integer between 0 and the given number (exclusively)
     ```javascript
     random(10); // 4
     random(100); // 78
     random(2); // 0
     ```
   - `randomLetter` - takes 1 string argument and console.logs a random letter from the given string
     ```javascript
     randomLetter("blah"); // "b"
     randomLetter("abcdefg"); // "g"
     randomLetter("z"); // "z"
     ```
   - `myGuy` - takes 1 string argument and console.logs the same string with “, my guy.” at the end of it
      ```javascript
      myGuy("Take it easy"); // "Take it easy, my guy"
      ```
   - `string_N_times` - takes 2 arguments, a string and a number, and console.logs the string as many times as the given number
   - `hypotenuse` - takes 2 number arguments (corresponding to the perpendicular sides of a right triangle) and console.logs the length of the 3rd side, the hypotenuse.
   - *NOTE: don’t worry about the math! Here’s the equation and some links to helpful functions in JavaScript*
     - <a href="https://www.codecogs.com/eqnedit.php?latex=c&space;=&space;\sqrt{a^{2}&plus;b^{2}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?c&space;=&space;\sqrt{a^{2}&plus;b^{2}}" title="c = \sqrt{a^{2}+b^{2}}" /></a>
     - [`Math.pow()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
     - [`Math.sqrt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
   ```javascript
   hypotenuse(3,4); // 5
   ```
5. Remember to add, commit, and push your changes!

## Extra Credit
- Look up how to set default parameter values for functions in JavaScript
   - Default values allow functions to work even when the function is called without arguments
   - Provide default values (choose whatever values you’d like!) for each parameter in the functions you’ve made
- At the other extreme, sometimes a function is given too many arguments. Look up the `arguments` array for functions in JavaScript. 
   - When more arguments are given than there are parameters to fill, the overflow gets pushed into a default array called `arguments` that only exists within the scope of the function
   - For each of the functions we made, if the function is called with extra arguments, `throw` a message informing the user “Too many arguments given!”
     - *Note: Remember to `throw` the message BEFORE executing the rest of the code, since throws halt the rest of the code from executing*
     - The `throw` keyword in JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
- JavaScript is considered a “weak typing” language, meaning data is not checked for being the correct TYPE of data. 
   - For example, in the `myGuy` function we expect it to be called with a string argument, but what if a number is given? Try it out! This is not the intended behavior!
   - For each function, verify that each parameter is the correct type of data BEFORE executing the rest of the code. Throw a `TypeError` if it isn’t.
     - Checking data type - [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
     - [Example of throwing a `TypeError`](https://stackoverflow.com/questions/39943319/throw-new-typeerror-when-date-is-invalid-date-object)

## Helpful Resources
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Collabedit](http://collabedit.com/)


