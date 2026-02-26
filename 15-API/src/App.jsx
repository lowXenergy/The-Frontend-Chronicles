import React,{useState} from 'react'
import axios from 'axios'

const App = () => {

  const [data, setdata] = useState([]);
//   function getData(){
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }
const getData = async ()=>{
  const axiosapi = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setdata(axiosapi.data);
}
  return (
    <div>
      <button onClick={getData}>API</button>
      <div>
        {data.map(function(elem,idx){
          return <div>{idx}.  {elem.body}<br/>{elem.userId}</div>
        })}
      </div>
    </div>
  )
}

export default App
//API are fetched using fetch and third party app axios.