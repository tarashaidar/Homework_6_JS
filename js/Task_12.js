/////////////TASK №12 A function returns name and age of users separated by comma that are older than 18./////////////

const users4 = [
    { name: 'John', birthday: '1999-6-12' },
    { name: 'Bill', birthday: '2005-5-19' },
    { name: 'Carol', birthday: '2003-10-11' },
    { name: 'Luce', birthday: '2000-11-22' }
  ];
  
  function getAdultNames(users4) { 
      let adultUsers = [];
      let currentYear = new Date().getFullYear();
      let usersDate = users4.forEach((user) => {
          let userYear = new Date(user.birthday).getFullYear();
        let userAge = currentYear - userYear;
        if (userAge > 18) {
             adultUsers.push(`${user.name} ${userAge}`)  
        }
      });
      adultUsers.reduce((value, current)=>{
        console.log(value + ` , ` + current);
        
      });
      
}
getAdultNames(users4) // 'John 19, Luce 18'