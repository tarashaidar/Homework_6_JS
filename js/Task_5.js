/////////////TASK №5 Implement function from task №3 (bombTimer) using recursion and setTimeout./////////////

function bombTimer(str, time) {
    let countTime = ()=>{
       console.log(time);
    if (time === 1) {
       setTimeout(()=>console.log(str), 1000);
       clearTimeout(settingTimes);
   }
   while (time > 1 ) {
       return bombTimer(str, time - 1 );
   }

   }
   let settingTimes = setTimeout(countTime,1000);

}

bombTimer('Boooom', 6);