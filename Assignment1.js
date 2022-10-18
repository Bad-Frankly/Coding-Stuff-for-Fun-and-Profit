//Question 1: Using console.log(), print the subtraction of num1 from num2.
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
//your code here

console.log(num2-num1);

//Question 2: Using console.log(), print the addition of num1 and num2.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
//your code here

console.log(num1+num2);

//Question 3: print the quotient (division) of num1 over num2

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
//your code here

console.log(num1/num2);

//Question 4: Using console.log(), compare num1 and num2 with the comparison operator (==).

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
//your code here

console.log(num1==num2);

//Question 5: Using console.log(), print the subtraction of num2 from num1 and multiply the result by 16

console.log((num1-num2)*16);

//Question 6: Using console.log(), print the product of num1 and num2.

console.log(num1*num2);

//Question 7: Using console.log(), print the addition of num1 and num2 then divide by 5.

console.log((num1+num2)/5);

//Variables
//Question 1: Create a variable called isHungry and assign the value true.
//            Then, declare a second variable called craving and assign the value 'italian food'.
//your code here

var isHungry = true;
var craving = 'The Cinnamon Swirls in Every Bite';

//Question 2: Create a variable named isHotOutside and set it equal to an appropriate value.

var isHotoutside = 'Hot as Balls';

//Question 3: Create a variable called fullName and set the value to 'Johnny Appleseed'.

var fullName = 'Johnny Appleseed';

//Question 4: Reassign the given variable favoriteGame to another game of your choice.

//Do not change this line
var favoriteGame = 'tag';

//your code here
 
var favoriteGame = 'The Fine Game of Nil';

//Ignore below. Do not change

console.log(typeof favoriteGame);
console.log(favoriteGame !== 'tag' && favoriteGame !== 'Tag');

//Question 5. Create a variable named age and set it equal to 27

//Your code here

var age = 27;

//Ignore below. Do not change
console.log(typeof age);
console.log(age);

// Question 6: Create a variable called computerIsOn and set it equal to true.

var computerIsOn = true;

// Question 7: Create a variable named itemPrice and set it equal to the price of your favorite item on Amazon. Be sure to include the decimal and the cents.

var itemPrice = 0.99;

//Syntax Questions

//1. C. 12
//2. A. 29
//3. A. NaN
//4. True
//5. D. 32
//6. B. 5
//7. A. "Z = 50"
//8. C. "3520" //YOU WERE WRONG, YOU ANSWERED A. THE FIRST TIME, YOU FAAAAAILURE
//9. A. undefined
//10. B. String
//11. B. Charater
//12. C. Null
//13. C. String
//14. B. Boolean
//15. D. String

console.log(((14/15)* 100 ) + "%")