/////////////TASK №7 A function that returns object with min and max numbers from array of numbers./////////////

function minMax(arr) { 
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));
 }

minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }