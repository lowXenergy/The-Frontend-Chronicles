import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("btn is clicked");
  }

  function mouseEnter(){
    console.log("Mouse entered");
    
  }

  function inputChanging(e){
    console.log(e);
  }
  
  const pageScrolling=()=>{
    console.log("Page Scrolling....");
    
  }
  return (
    <div >
      <div>
      <h1>Hello, guys</h1>
      <button onClick={btnClicked} onMouseEnter={mouseEnter}>Change User</button>
      <button onMouseEnter={mouseEnter}>Hover</button>
      <button onMouseEnter={function () {
        console.log("hellos");
        
      }}>Explore this</button>
      </div> 
      <div>
        <input onChange={function(params) {
          inputChanging(params.target.value)
        }} type="text" placeholder='Enter anything'/>
      </div> 
      <div onMouseMove={(elem)=>{
        console.log(elem.clientY);
      }}className="box">

      </div>
      <div onWheel={(elem)=>{
      pageScrolling(elem)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
    </div>
    
  )
}

export default App
