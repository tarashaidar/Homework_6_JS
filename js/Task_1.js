/////////////TASK №1 A function which prints str after n seconds./////////////

function printTimeout(str, n) {
    let delay = n*1000;
    let printStr = function(){
        console.log(str)
    }

    let settingTime = setTimeout(printStr,delay);
    if (n === 10) clearTimeout(settingTime);
}

printTimeout('hello', 1) // hello will appear after 10secs in console