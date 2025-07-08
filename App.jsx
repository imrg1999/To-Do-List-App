import React, {useState} from 'react'

function App() {

const [task, setTask] = useState("");
const [maintask, setMaintask] = useState([]);

const submithandle = (e) => {
e.preventDefault();
setMaintask([...maintask, task])
setTask("");
}
const deleteHandler = (index) => {
  const updatedTasks = maintask.filter((_, i) => i !== index);
  setMaintask(updatedTasks);
};

let renderTask; 
if(maintask.length === 0) 
  {renderTask = <h1>There are no tasks</h1>}
else {
renderTask = maintask.map((todo,index) => {
  return <li key={index} className='flex items-center mb-5'>
    <div className='flex justify-between w-2/3 mx-auto'>
    <h4>{todo}</h4>
    </div>
    <button style={{background: 'grey'}} className='px-2 py4 font-bold rounded' onClick={() => {deleteHandler(index)}}>
      Delete🗑️</button>
  </li>
})

}
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-800 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-xl">
        <h1 className='text-center'>🔗React Mini Project</h1>
    <h1 className='bg-blue-400 text-center font-bold p-1 font-5xl'>
      📝To Do List</h1>
      <form action="" className="flex justify-center" onSubmit={submithandle}>
        <input type="text" onChange={(e)=> {setTask(e.target.value)}} className='border-zinc-500 text-xl border-2 m-2 px-3 py-2' placeholder='Enter task.....'
        value={task}/>
        <button className='bg-blue-400 border-2 m-2 px-3 py-2'>Add</button>
      </form>

      <div className='p-2 bg-blue-300 text-center'>
        <ul>{renderTask}</ul>
      </div>
      </div>
      </div>
    </>
  )
}

export default App