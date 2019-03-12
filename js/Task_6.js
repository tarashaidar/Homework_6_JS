/////////////TASK №6 A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber./////////////

function filterNumbers(arr, maxNumber) { 
    let filterNumbers = arr.filter((value)=>{
        return value < maxNumber;
    });
    console.log(filterNumbers);
 }

filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]