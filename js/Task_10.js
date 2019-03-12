/////////////TASK №10 A function accepts array of users and returns object of users where key is user id and value user data./////////////

const users1 = [
    { id: 1, name: 'John', birthday: '1999-2-12' },
    { id: 2, name: 'Bill', birthday: '1999-1-19' },
    { id: 3, name: 'Carol', birthday: '1999-3-11' },
    { id: 4, name: 'Luce', birthday: '1999-2-22' }
  ];
 
 ///////////Using Destruction////////// 
  function usersToObjects(users1) {
    let {...objectOfUsers} = [...users1];
    console.log(objectOfUsers);
  }

  usersToObjects(users1)
// ///////////////////////////////////////
  function usersToObject(users1) { 
      let userObj = {};
      users1.forEach((user) => {
          userObj[user.id] = user;
      });
      console.log(userObj);
      
  }

  usersToObject(users1)

  // {
  //  1: { id: 1, name: 'John', birthday: '1999-2-12' },
  //  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
  //  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
  //  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
  // };