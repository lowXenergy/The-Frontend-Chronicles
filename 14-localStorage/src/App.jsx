import React from 'react'

const App = () => {
  // localStorage.clear();
  // localStorage.setItem('1','local');//{KEY:VALUE}
  // console.log(localStorage.getItem('1'));//To get the item of local storage //local
  // const item=localStorage.getItem('1')
  // console.log(item);

  // localStorage.setItem('2','2nd local');
  // localStorage.removeItem('2');

  const user={
    username:"lowXenergy",
    age:0,
    city:"Universe"
  }
  //When we store items in local storage we have to always give value in string form that's why we use JSON.stringfy.
  localStorage.setItem('user',user)//user	[object Object]<-- This is how local storage save it if we don't give it in string format.
  localStorage.setItem('user',JSON.stringify(user))//{"username":"lowXenergy","age":0,"city":"Universe"}

  const lsuser = localStorage.getItem('user');
  console.log(lsuser);//{"username":"lowXenergy","age":0,"city":"Universe"}

  const llsuser = JSON.parse(localStorage.getItem('user'));
  console.log(llsuser);//{username: 'lowXenergy', age: 0, city: 'Universe'}
  
  return (
    <div>
      App
    </div>
  )
}

export default App
