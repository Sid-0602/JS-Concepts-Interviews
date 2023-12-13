
//functions in JS: (Different types): Normal function, functions assigned to variables and passed as callback functions.

//normal function: 
function add(n1,n2){
    return n1+n2;
}

console.log(add(2,3));
//function as variable: 

const result = function(n1,n2){
    return (n1+n2);
}

console.log(result(2,5));

// Q: What are first class functions: Function that can be treated like variables and they can be passed to another function, manipulated and returned.
// Hence they are called as first class function. 

function displayResult(fn){
    console.log("This is function displayed by another function : ",fn(5,5));
}

displayResult(result);

// Q: What is IIFE: Immediately invoked function expression. 
// These function that are invoked immediately after they are declared.
(function squre_iife(n){
    console.log("This is IIFE square result: ",n*n);
})(5);

(function(n){
    console.log("This IIFE is without function name: ",n*n);
})(6);


// Q: What is closures: Ability of function to use variables outside of it's lexical scope, known as closures.

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init(); 

// Q: Function scope in JS: 

var num1=20,
num2=3;
name="This is JS";

function scope(){
    var num1 = 2,
    num2=5;

    function add(){
        console.log(name + " " + (num1+num2));
    }
    add();
}
scope();

// Q: Hoisting for variables and functions: 
// JavaScript Hoisting refers to the process whereby the interpreter appears to 
// move the declaration of functions, variables, classes, or imports to the top of their scope, 
// prior to execution of the code.

// Note: Function are entirely copied into global scope for hoisting and variables are just intialised. 

functionName();
function functionName(){
    s = "This is hoisted function";

    console.log("This is variable hoisted: " ,x);
    var x = 5;
    console.log("This is variable after hoisting: ",x);
    console.log(s);
}


// Q: Params VS Arguments: 
// A parameter is a variable in a function definition. 
// It is a placeholder and hence does not have a concrete value.

// An argument is a value passed during function invocation.
// In the below example, x and y are params 
function foo(x,y){
    console.log((x-y)); 
}

foo(5,6); //5,6 are arguments

// Q: Spread VS Rest operator:

// Spread: The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places 
// where zero or more arguments (for function calls) or elements (for array literals) are expected.

// Q: Rest: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//  providing a way to represent variadic functions in JavaScript.

function sumOfTwoNums(n,m){
    console.log("Spread example: ",n+m);
}

var arr = [5,6,4];
sumOfTwoNums(...arr); //this allows to pass first two arguments into function. 

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}


console.log("Rest example: ",sum(1,2,3,4));

// Q: What is callback function: 
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.


function sayHello(callback){
    console.log("This is sayhello main function");
    callback(sayHi);
}

function sayHi(){
    console.log("Hi from callback");
}

sayHello(sayHi); //sayhi function is passed into another function .

// Q. Arrow Function:  ES6 version, add arrow instead of writing "function" .
const normal = function(n){
    return n*2;
}

const arrowFunction = (n)=>{ return n*2}
// Arrow function have implicit "return" keyword: 

const arrowFun = (n)=> n*2
//arrow function cannot have arguments without passing parameters.


