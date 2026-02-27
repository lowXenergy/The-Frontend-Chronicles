import React,{useState,useEffect} from 'react'

const App = () => {
  const [first, setfirst] = useState(0); 
  const [second, setsecond] = useState(100) 
  useEffect(() => {
    console.log("use effect is running",first);
  },[first])
  
  return ( 
    
    <div>
      <h1>{first}</h1>
      <button onMouseEnter={()=>{
        setfirst(first+10);
      }} onMouseLeave={()=>{
        setsecond(second+10);
      }}>Hover</button>
    </div>
  )
}

export default App
