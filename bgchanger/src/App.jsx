import { useState } from 'react'

function App() {
  const [color,setColor] = useState('olive')

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button onClick={()=> setColor('red')} className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=> setColor('blue')} className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'blue'}}>blue</button>
            <button onClick={()=> setColor('yellow')}  className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'yellow'}}>yellow</button>
            <button onClick={()=> setColor('green')}  className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'green'}}>green</button>
            <button onClick={()=> setColor('violet')}  className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'violet'}}>violet</button>
            <button onClick={()=> setColor('black')}  className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'black'}}>black</button>
            <button onClick={()=> setColor('pink')}  className='outline-none px-4 text-white shadow-lg rounded-xl' style={{backgroundColor:'pink'}}>pink</button>
            <button onClick={() => setColor('olive')}  className='outline-none px-4 text-black shadow-lg rounded-xl' style={{backgroundColor:'white'}}>Reset</button>
            
          </div>
        </div>
      </div>
  )
}

export default App