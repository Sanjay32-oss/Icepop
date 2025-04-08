import React, { useState } from 'react'

const Sanjay1 = () => {
const[color, SetColor]=useState("Green")
const[model]=useState("Ford");
const[year]=useState("2025");
const[price]=useState("900k");
const[sports]=useState("Superfast");
  return (
    <>
    <h3>{2+2+2+2+2+2}</h3>
    <i style={{fontSize:'2rem', fontStyle:'bold', backgroundColor:'red', borderRadius:'5pxmain1'}}>My Car model name is {model} and I purchase this car in this {year} and my car has many features like{sports} and the car price is {price}</i><br/>
    <h1>Car color is change into New Color {color} by button</h1>
    <button onClick={()=>{
    SetColor("Red")
    }} style={{fontSize:'14px', margin:'10px'}}>CHANGE COLOR</button>
    <button onClick={()=>{
    SetColor()
    }} style={{fontSize:'14px',}}>RESET</button>
    </>
  )
}

export default Sanjay1;