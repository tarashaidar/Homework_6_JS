/////////////TASK №3 A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str/////////////

function bombTimer(str, time) {
    let countTime = ()=>{
       console.log(time);
       time--;
   
   if (time === 0) {
       setTimeout(()=>console.log(str), 1000);
       clearInterval(settingInterval);
   }

   }
   let settingInterval = setInterval(countTime,1000);

}

bombTimer('Boooom', 3);