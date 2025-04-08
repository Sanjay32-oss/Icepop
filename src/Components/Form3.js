import React, { useState } from 'react'

const Form3 = () => {
const [name, setName]=useState("");
const [age, setAge]=useState("");
const [id, setId]=useState("");

const handlesubmit=(e)=>{
e.preventDefault();
alert(`Data is submitted succefully:${name}:${age}:${id}`)
setName("");
setAge("");
setId("");
window.location.reload();
}
  return (
    <><form onSubmit={handlesubmit}>
    <input type="text" placeholder='Enter your Name' name="Name" value={name} onChange={(e)=>{
    setName(e.target.value)
    }}required/><br/>
    <input type="number" placeholder='Enter your Age' name="Age" value={age} onChange={(e)=>{
    setAge(e.target.value)
    }}required/><br/>
    <input type="number" placeholder='Enter your Id' name="Id" value={id} onChange={(e)=>{
    setId(e.target.value)
    }}required/><br/>
    <input type="Submit"/><br/>
    </form></>
  )
}

export default Form3