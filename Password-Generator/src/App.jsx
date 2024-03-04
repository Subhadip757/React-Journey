import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [upperCase, setupperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef()

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[])

  const passwordGenerator = useCallback(()=>{
    let generatedPass = ''
    let pass = ''

    if(upperCase){
      pass += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(lowerCase){
      pass += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(numberAllowed){
      pass += '0123456789'
    }
    if(charAllowed){
      pass += '~`@#$%^&*(){}[]'
    }
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * pass.length + 1)
      generatedPass += pass.charAt(char)
    }

    setPassword(generatedPass)
  },[length, upperCase, lowerCase, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, upperCase, lowerCase, passwordGenerator])
  
  return (
    
    <>

    <div className=' w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex m-4 items-center'>
        <input 
          className='bg-white w-64 sm:w-96 h-16 rounded-t-2xl rounded-l-md rounded-e-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-b-4  border-green-800 relative block focus:outline-none p-5' 
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button onClick={copyPasswordToClipboard}> <i className="fa-regular fa-copy text-3xl relative block ml-5 hover:scale-90"></i></button>
        <button onClick={passwordGenerator}><i className="fa-solid fa-rotate-right text-3xl relative block ml-5 hover:scale-90"></i></button>
      </div>

      <div className='bg-white rounded-2xl p-4 sm:p-16 shadow-2xl w-max h-max'>
        <h1 className='text-3xl font-bold border-b-2 pb-4'>Customize your Password</h1>
        <div className='flex'>
          <div>
            <p className='text-2xl sm:mt-5'>Password Length</p>
            <div className='flex'>
              <input 
                type="number"
                className='w-14 h-10 shadow-[inset_-12px_-8px_40px_#46464620] text-center mt-3 sm:mt-5 border border-black rounded-md'
                value={length}
              />
              <input type="range"
              min={1}
              max={20}
              onChange={(e)=>{setLength(e.target.value)}}
              className='mt-3 sm:mt-5 ml-1 sm:ml-3' />
            </div>
          </div>


          <div className='mt-5 text-xl sm:ml-5'>
            <div className='flex items-center gap-x-4'>
              <input 
                type="checkbox" 
                className='w-5 h-5'
                onChange={()=>{setupperCase((prev)=> !prev)}}
              />
              <label htmlFor="">UPPERCASE</label>
            </div>

            <div className='flex items-center gap-x-4'>
              <input 
                type="checkbox" 
                className='w-5 h-5'
                onChange={()=>{setLowerCase((prev) =>!prev)}}
              />
              <label htmlFor="">lowercase</label>
            </div>

            <div className='flex items-center gap-x-4'>
              <input 
                type="checkbox" 
                className='w-5 h-5'
                onChange={()=>{setNumber((prev) => !prev )}}
              />
              <label htmlFor="">Numbers</label>
            </div>

            <div className='flex items-center gap-x-4'>
              <input 
                type="checkbox" 
                className='w-5 h-5'
                onChange={()=>{setChar((prev)=>!prev)}}
              />
              <label htmlFor="">Symbols</label>
            </div>
          </div>

        </div>
      </div>
      <button onClick={copyPasswordToClipboard} className='bg-red-500 rounded-3xl w-44 h-10 text-white font-bold'>Copy Password</button>
    </div>

    </>
    
  )
}

export default App