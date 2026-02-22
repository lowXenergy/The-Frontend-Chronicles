import React from 'react'
import LeftContent from './LeftContent'
import RightContetn from './RightContetn'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex gap-10 items-center h-[90vh]  px-18'>
        <LeftContent/>
        <RightContetn users={props.users}/>
    </div>
  )
}

export default Page1Content
