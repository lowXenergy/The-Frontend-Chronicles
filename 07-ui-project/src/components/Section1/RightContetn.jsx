import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContetn = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto rounded-4xl w-2/3 p-6 flex flex-nowrap gap-10'>
      {props.users.map((elem,idx) => {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContetn