import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Card from './components/Card'

const MAX_PAGES = 100

const App = () => {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [index, setIndex] = useState(1)

  const getData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=32`
      )
      setUserData(response.data)
    } catch (err) {
      setError('Failed to load images. Please try again.',err)
    } finally {
      setIsLoading(false)
    }
  }, [index])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

      <div className='relative flex h-[82%] flex-wrap gap-4 p-2'>
        {isLoading && (
          <p className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
            Loading...
          </p>
        )}
        {error && (
          <p className='text-red-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
            {error}
          </p>
        )}
        {!isLoading && !error && userData.map((elem) => (
          <Card key={elem.id} elem={elem} />  
        ))}
      </div>

      <div className='flex justify-center gap-6  mt-20 items-center p-4'>
        <button
          disabled={index === 1}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={() => setIndex((prev) => prev - 1)}  
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          disabled={index === MAX_PAGES}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={() => setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default App