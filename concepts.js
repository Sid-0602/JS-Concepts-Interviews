
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

num=10;
(function (num){
    let num=5;
    console.log("Num is: ",num);

})(num);

(function(num){
    console.log("Num is: ",nun);
})