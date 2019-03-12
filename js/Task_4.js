/////////////TASK №4 A function which returns factorial of number using recursion./////////////

function factorial(n) {
    if (n === 1) {
         return n;
    } else {
        return n * factorial(n -1 );
    }
 }
console.log(factorial(3));// 6
console.log(factorial(5)); // 120