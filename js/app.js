//q: what does SOLID stand for in OO programming?
//a: Single responsibility, Open-closed, Liskov substitution, Interface segregation and Dependency inversion

//q: Single responsibility
//a: A class should have one and only one reason to change, meaning that a class should have only one job.

//q: Open-closed principle
//a: Objects or entities should be open for extension, but closed for modification.

//regex to match phone numbers in the format of (xxx) xxx-xxxx
var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$
//^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$

//test the phoneregex against a phone number with console.log
console.log(phone.test('(123) 4t56-7890'));
var testPhone = phone.test('(123) 456-7890');




function calculator(str){
    //regex to match the numbers and operator
    var regex = /(\d+)(\+|\-|\*|\/)(\d+)/;
    //use matched methods to get the numbers and operator
    var match = str.match(regex);
    //use parseInt to convert the strings to numbers
    var num1 = parseInt(match[1]);
    var num2 = parseInt(match[3]);
    //use switch to evaluate the operator and perform the operation
    switch(match[2]){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'invalid operator';
    }
}

//test the calculator function with console.log
console.log(calculator('2+2')); //4
console.log(calculator('2-2')); //0
console.log(calculator('2*2')); //4
console.log(calculator('2/2')); //1
console.log(calculator('2^2')); //invalid operator

//creat unit tests for the calculator function
var assert = require('assert');
assert.equal(calculator('2+2'), 4,"calculator should add two numbers");
assert.equal(calculator('2-2'), 0,"calculator should subtract two numbers");
assert.equal(calculator('2*2'), 4,"calculator should multiply two numbers");
assert.equal(calculator('2/2'), 1,"calculator should divide two numbers");
assert.equal(calculator('2^2'), 'invalid operator',"calculator should return invalid operator");

/// create a function that takes a string and returns the string reversed
function reverseString(str){
    //use split to convert the string to an array
    var arr = str.split('');
    //use reverse to reverse the array
    var rev = arr.reverse();
    //use join to convert the array back to a string
    var revStr = rev.join('');
    //return the reversed string
    return revStr;
}

//test the reverseString function with console.log
console.log(reverseString('hello'));
