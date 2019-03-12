/////////////TASK №8 A function that returns average of numbers in array./////////////

function average(arr) {
    let sum = 0;
    let amount = arr.length;
    arr.forEach((value) => {
        sum += value; 
    });
    // for (let i = 0; i < arr.length; i++) {
    //     sum+=arr[i];
    // }
    let averageNumber = sum/amount;
    console.log(averageNumber.toFixed(2));      
}

average([1,4,2]) // 2.33