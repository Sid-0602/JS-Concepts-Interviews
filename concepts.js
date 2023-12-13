
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

// Q: 

scope();
