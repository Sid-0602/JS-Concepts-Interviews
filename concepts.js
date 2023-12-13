
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
// Arrow function have implicit "return" keyword and arrow function cannot have arguments without passing parameters.

const arrowFun = (n)=> n*2

// Q: Lexical Scope: A variable defined outside of function can be accessed but the variable defined inside of 
// function cannot be outside of it's local scope.

var username = "Sid";
//global scope
function local(){   
    //local scope
    var password = "this is local";

    var lastname = "Jadhav";
    function displayName(){
        //inner scope
        console.log("This is called by inner scope:  "+ lastname);
    }

    console.log("This is called by local scope : " + username);
    displayName();
}

// console.log(password); //this cannot be referenced. 
local();

// Q: What are Closures: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.
// Closures helps to use private variables in JS: 

var outername = "This is outer scope"
function makeFunc(){
    var name = "Sid Jadhav";
    function displayname(){
        console.log("This is due to Closure: " + name);
        console.log("This is outer scope: "+ outername);
    }
    return displayname;
}

makeFunc()(); //as it return us another function, we need to use two ().

//Closure scope chain: 
/*  
    Every closure has three scopes:

    Local scope (Own scope)
    Enclosing scope (can be block, function, or module scope)
    Global scope

*/

// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log("This is callback scope: "+sum(1)(2)(3)(4));

// Q: settimeout + block scope : 


// 3 3 3 will be print due to "var" as it will have function scope. 
function printFuncVar(){
    for(var i=0;i<3;i++){
        setTimeout(function log(){
            console.log("This is due to var function scope: " + i);
        }, i*1000);
    }
}

// 1 2 3 will be printed due to "let" as it will have local scope.
function printFuncLet(){
    for(let i=0;i<3;i++){
        setTimeout(function log(){
            console.log("This is due to let function scope: " + i);
        }, i*1000);
    }
}

printFuncVar();
printFuncLet();

//how to convert the above code using "var" only? 
//Use Closure to change scope of i to local: 

function printFuncLocal(){
    for(var i=0;i<3;i++){

        function inner(i){
            setTimeout(function log(){
                console.log("This is correct var function scope: " + i);
            }, i*1000);
        } 
        inner(i);  
    }
}

printFuncLocal();




