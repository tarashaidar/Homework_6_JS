/////////////TASK №2 A function which returns sum of all numbers from 1 to n using recursion./////////////

function sumAll(n) { 
    if (n === 1) {
        return n;
    }else{
        return n + sumAll(n - 1);
    }
}

console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10