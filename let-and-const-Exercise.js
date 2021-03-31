ES5 Global Constants

var PI = 3.14;
PI = 42; // stop me from doing this!

ES2015 Global Constants
// Write an ES2015 version

const PI = 3.14
PI = 43 // error

//Quiz

//What is the difference between var, let, and Const

var
    Can reassing = yes
    Can Redeclare = yes
    Can Mutate = Yes
    Scope Rules = Function Scope

Let
    Can reassing = yes
    Can Redeclare = no
    Can Mutate = Yes
    Scope Rules = Block Scope

    Let
    Can reassing = no
    Can Redeclare = no
    Can Mutate = Yes
    Scope Rules = Block Scope

    What is the difference between var and let
    // YOu can reasign and redeclare with car, but you can not redeclare using the let keywords. You can access a hoisted variable with var. Let creates block scope. 

    What is the difference between var and const
    // You can reasign and redeclare with var, but you can not redeclare or reassign using the const keyword. You can access a hoisted variable with var. Const creates block scopes/

    What is the difference betwen let and cosnt?

//You can reasingn with let, but you can not redeclare or reassing using the const keyword.

What is hoisting?
// Its the way that we exaplin how the JS compiler works. Variables are lifting or hoisted to the top of to the scope they are declared in. When using var, you can access the variable name and it's undefined value before it is used late on. 

//Function declarations are also hoisted and can be invoked "before" there are defined in codebase. 