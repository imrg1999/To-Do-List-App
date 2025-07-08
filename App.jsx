import React, {useState} from 'react'

function App() {

const [task, setTask] = useState("");
const [maintask, setMaintask] = useState([]);

const submithandle = (e) => {
e.preventDefault();
setMaintask([...maintask, task])
setTask("");
}
let renderTask = <h1>There are no tasks</h1>
  return (
    <>
    <h1 className='bg-blue-400 text-center font-bold p-1'>
      To Do List</h1>
      <form action="" className="flex justify-center" onSubmit={submithandle}>
        <input type="text" onChange={(e)=> {setTask(e.target.value)}} className='border-zinc-500 text-xl border-2 m-2 px-3 py-2' placeholder='Enter task.....'
        value={task}/>
        <button className='bg-blue-400 border-2 m-2 px-3 py-2'>Add</button>
      </form>
      <hr />

      <div className='p-2 bg-blue-300 text-center'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default App