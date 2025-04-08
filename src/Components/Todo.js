import React, { useState } from 'react'
import '../CSS/Fifth.module.css'

const Todo = () => {
const[name, setName]=useState("")
const[task, setTask]=useState("")
const[tasks, setTasks]=useState([])

const handlesubmit=((e)=>{
e.preventDefault();
alert(`Data is Submitted:${name}:${task}`)
if(name && task){
setTasks([...tasks,{name,task}])
setName("")
setTask("")
window.location.reload()
}
})
  return (
    <>
    <div className='Container'>
    <form onSubmit={handlesubmit}>
    <h1>ToDo List</h1>
    <input type="text" placeholder='Enter the value' name="name" value={name} required onChange={(e)=>{
    setName(e.target.value)
    }}/><br/>
    <input type="text" placeholder='Enter the task' name="task" value={task} required list='task-options' 
     onChange={(e)=>{
    setTask(e.target.value)
    }}/><br/>
    <datalist id="task-options">
    <option value="Car Wash" />
    <option value="Content Writing" />
    <option value="Graphic Design" />
    <option value="Home Cleaning" />
    <option value="Tutoring" />
    <option value="Web Developer"/>
    </datalist>
    <input type="Submit" style={{backgroundColor:'red', borderRadius:'10px', fontSize:'12px', fontFamily:'sans-serif', height:'4.6vh'}}/>
    </form>
    <ul>
    {tasks.map((t,index)=>{
    return <li key={index}>{t.name}:{t.task}</li>
    })}
    </ul>
    </div>
    </>

    
  )
}
export default Todo;