import React, { useState } from 'react'

const Sanjay = () => {
const[color, SetColor]=useState("Red");

// useState use in multiple object
const[car]=useState({
Name:"Toyota Fortuner",
Model:"2025",
Color:"Red",
});
  return (
    <><h1>My Car color is {color} color</h1>
    <button onClick={()=>{
    SetColor("green")
    }} style={{margin:'10px', fontSize:'15px'}}>Green</button>
    <button onClick={()=>{
    SetColor("Blue")
    }} style={{margin:'10px', fontSize:'15px'}}>Blue</button>
    <button onClick={()=>{
    SetColor("yellow")
    }} style={{margin:'10px', fontSize:'15px'}}>yellow</button>
    <button onClick={()=>{
    SetColor("Black")
    }} style={{margin:'10px', fontSize:'15px'}}>Black</button>
    <button onClick={()=>{
    SetColor("CherryRed")
    }} style={{margin:'10px', fontSize:'15px'}}>CherryRed</button><br/><br/>


    {/* useState use in object */}
    <h2>My Car Name is {car.Name}</h2>
    <p style={{fontSize:'20px'}}>My Car Color is {car.Color} and model is {car.Model}</p>
    

    </>
  )
}

export default Sanjay;