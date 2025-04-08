import React, { useState } from 'react'

const Form = () => {
const [name, setname]= useState("");
const [age, setage]= useState();
const [number, setnumber]= useState();

const handlesub=(e)=>{
e.preventDefault();
alert(`data submitted succesfully:${name},${age},${number}`);
window.location.reload();

}
  return (
    <>
    <form onSubmit={handlesub}>
    <input type="text" placeholder='Enter your name' required name="name" value={name} onChange={(e)=>{
    setname(e.target.value)
    }}/><br/>
    <input type="Number" placeholder='Enter your age' required name="age" value={age} onChange={(e)=>{
    setage(e.target.value)
    }}/><br/>
    <input type="Number" placeholder='Enter your number' required name="number" value={number} onChange={(e)=>{
    setnumber(e.target.value)
    }}/><br/>
    <input type="Submit"/>
    </form>
    </>
  )
}

export default Form