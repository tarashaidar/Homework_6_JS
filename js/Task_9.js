/////////////TASK №9 A function which concats all first-nested arrays in one array (use reduce)/////////////

function concatFirstNestedArrays(arr) { 
    let result = arr.reduce((union, current)=>{
        return union.concat(current);
    })
    console.log(result);
 }

concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]