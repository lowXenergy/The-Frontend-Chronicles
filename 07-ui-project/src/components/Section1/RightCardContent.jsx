import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      
      <h2 className='bg-white rounded-full h-14 flex justify-center text-2xl font-semibold w-14 items-center'>
        {props.id + 1}
      </h2>

      <div>
        <p className='text-shadow-lg text-sm text-white mb-10 leading-normal'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem esse aut, rerum rem eum soluta?
        </p>

        <div className='flex justify-between'>
          
          <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full 
                             transition-all duration-300 
                             hover:bg-red-700 hover:scale-105'>
            {props.tag}
          </button>

          <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full 
                             transition-all duration-300 
                             hover:bg-red-700 hover:scale-105'>
            <i className="ri-arrow-right-line"></i>
          </button>

        </div>
      </div>
    </div>
  )
}

export default RightCardContent