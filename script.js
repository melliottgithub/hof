/* Higher order functions ===> HOF*/

/* Remember first class functions! ===> functions are simple treated as values */

/* HOF is a function that receives another function as an argument.
   HOF is a function that returns a new fucntion.
   HOF could be both too. ===> Because functions are simple treated as values!!
*/

/* Example: functions that accept callback functions ===> event listeners... */

const callback = function () {
    console.log('I am a callback!');
}

document.body.addEventListener('click', callback);

/* Examples */
const cardLen = function (num) {
    return num.length;
}

const prefix = function (num) {
    return num.slice(0, 2);
}

/* Higher order Function */
const isCard = function (num, fn) { // fn is the callback function
    console.log(`The card number is ${num}`)
    console.log(`${fn.name} is ==> ${fn(num)}`)
    console.log(`The card has a ${fn.name} of ${fn(num)}`)
}

isCard('23574862485', prefix);
isCard('23574862485', cardLen);

/* Example 2 */

const greet = function(greeting){ // greeting works in the inner function because of closure!
    return function(name){
        console.log(`${greeting} ${name}`)
    };
}

/* const greet = greeting => name => console.log(`${greeting} ${name}`; ====> arrow function */

const greetHello = greet('Hello'); /* greetHello ===>>>  "function(name){console.log(`${greeting} ${name}`)}" */

console.log(greetHello); /* Function definition */

greetHello(); //undefined

greetHello('Mike'); // Hello Mike
greetHello('Hack Reactor'); // Hello Hack Reactor

greet('Hello')('Mike') 
greet('Hello')('Hack Reactor')