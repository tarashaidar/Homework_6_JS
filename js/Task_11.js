/////////////TASK №11 A function returns array of users that have birthdays in a specific month./////////////

const users3 = [
    { name: 'John', birthday: '1999-2-12' },
    { name: 'Bill', birthday: '1999-1-19' },
    { name: 'Carol', birthday: '1999-4-11' },
    { name: 'Luce', birthday: '1999-2-22' }
  ];
  
  function filterUsersByMonth(users3, month) { 
    users3.forEach((user)=>{
          let birthDay = new Date(user.birthday); 
          if (birthDay.getMonth() === month){
              console.log(user);
          }
      })
   }

  filterUsersByMonth(users3, 3); // [{ name: 'Bill', birthday: '1999-1-19' }]