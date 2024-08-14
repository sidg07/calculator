import { useState } from 'react'



function App() {
   
  const [input,setInput]=useState('0');
 
  const handleClick =(value)=>{
    if(input==='0'){
      setInput(value)
    }
    else{
      setInput((prev)=>prev+value)

    }
   
  }
  const calculateResult=()=>{
    try{
      setInput(eval(input).toString());

    }
    catch(error)
    {
      setInput('sahi se daal na bsdk');
    }
   

  }
  const clearInput=()=>{
    setInput('')
  }

  return (
    <div className="w-72 mx-auto mt-20 p-6 bg-gray-100 rounded-lg shadow-lg">
    <div className="text-right text-2xl bg-white p-4 rounded-lg mb-4 shadow-inner">
        {input }
    </div>
    <div className="grid grid-cols-4 gap-3">
        <button
            onClick={clearInput}
            className="p-4 bg-red-400 text-white rounded-lg"
        >
            C
        </button>
        <button
            onClick={() => handleClick('/')}
            className="p-4 bg-gray-300 rounded-lg"
        >
            /
        </button>
        <button
            onClick={() => handleClick('*')}
            className="p-4 bg-gray-300 rounded-lg"
        >
            *
        </button>
        <button
            onClick={() => handleClick('-')}
            className="p-4 bg-gray-300 rounded-lg"
        >
            -
        </button>
        <button
            onClick={() => handleClick('7')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            7
        </button>
        <button
            onClick={() => handleClick('8')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            8
        </button>
        <button
            onClick={() => handleClick('9')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            9
        </button>
        <button
            onClick={() => handleClick('+')}
            className="p-4 bg-gray-300 rounded-lg"
        >
            +
        </button>
        <button
            onClick={() => handleClick('4')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            4
        </button>
        <button
            onClick={() => handleClick('5')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            5
        </button>
        <button
            onClick={() => handleClick('6')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            6
        </button>
        <button
            onClick={calculateResult}
            className="row-span-2 p-4 bg-blue-500 text-white rounded-lg"
        >
            =
        </button>
        <button
            onClick={() => handleClick('1')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            1
        </button>
        <button
            onClick={() => handleClick('2')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            2
        </button>
        <button
            onClick={() => handleClick('3')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            3
        </button>
        <button
            onClick={() => handleClick('0')}
            className="col-span-2 p-4 bg-gray-200 rounded-lg"
        >
            0
        </button>
        <button
            onClick={() => handleClick('.')}
            className="p-4 bg-gray-200 rounded-lg"
        >
            .
        </button>
    </div>
</div>
  )
}

export default App
