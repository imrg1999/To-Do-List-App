import React, {useState} from 'react'

function App() {

const [task, setTask] = useState("")

  return (
    <>
    <h1 className='bg-blue-400 text-center font-bold p-1'>
      To Do List</h1>
      <form action="" className="flex justify-center">
        <input type="text" onChange={(e)=> {setTask(e.target.value)}} className='border-zinc-500 text-xl border-3 m-2 px-3 py-2' placeholder='Enter task.....'
        value={task}/>
        <button className='bg-blue-400 border-3 m-2 px-3 py-2'>Add</button>
      </form>
      <hr />

      <div></div>
    </>
  )
}

export default App