import React from 'react'
import Cards from './Components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Cards user="lowXenergy" img="https://images.unsplash.com/photo-1770701195265-8af0dc148446?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Cards user="nowUser" img="https://plus.unsplash.com/premium_photo-1768288662582-24c46f53d290?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
