import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increase(){
    setnum(num+1);
  }
  function decrease(){
    setnum(num-1);
  }
  function reset() {
    setnum(0);
  }
  return (
    <div className='container'>
      <h1>{num}</h1>
      <button onClick={increase}>++</button>
      <button onClick={decrease}>--</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
