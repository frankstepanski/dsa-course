/*
    Recursion Problem Set
    1. Write a function that takes a number as an argument and returns the factorial of the number.
    2. Write a function that takes a number as an argument and returns the nth number in the Fibonacci sequence.
    3. Write a function that takes a number as an argument and returns the sum of all the numbers up to the number.
    4. Write a function that takes a number as an argument and returns the sum of all the even numbers up to the number.
    5. Write a function that takes a number as an argument and returns the sum of all the odd numbers up to the number.
    6. Write a function that takes a number as an argument and returns the sum of all the numbers in the Fibonacci sequence up to the number.
*/

// 1. Write a function that takes a number as an argument and returns the factorial of the number.
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// 2. Write a function that takes a number as an argument and returns the nth number in the Fibonacci sequence.
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 3. Write a function that takes a number as an argument and returns the sum of all the numbers up to the number.
function sum(num) {
    if (num === 0) return 0;
    return num + sum(num - 1);
}

// 4. Write a function that takes a number as an argument and returns the sum of all the even numbers up to the number.
function sumEven(num) {
    if (num === 0) return 0;
    return num % 2 === 0 ? num + sumEven(num - 1) : sumEven(num - 1);
}

// 5. Write a function that takes a number as an argument and returns the sum of all the odd numbers up to the number.
function sumOdd(num) {
    if (num === 0) return 0;
    return num % 2 !== 0 ? num + sumOdd(num - 1) : sumOdd(num - 1);
}

// 6. Write a function that takes a number as an argument and returns the sum of all the numbers in the Fibonacci sequence up to the number.
function sumFibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num) + sumFibonacci(num - 1);
}

module.exports = {
    factorial,
    fibonacci,
    sum,
    sumEven,
    sumOdd,
    sumFibonacci
};