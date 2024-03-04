import React from 'react'
import { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Subhadip757')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
      return () => {

      }
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: {data.followers} 
        <img src={data.avtar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github