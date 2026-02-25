import React from 'react'

const App = () => {
  const submitHandler=(d)=>{
    d.preventDefault();
    console.log("Submited..");
  }
  return (
    <div>
      <form onSubmit={(d)=>{
          submitHandler(d);
        }} >
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
