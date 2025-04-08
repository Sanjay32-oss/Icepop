import React from 'react'
import Demo from './Demo'
import Demo2 from './Demo2'


const Radhe = () => {
  const name="Rohan"
  return (
    <>
    {name==="sanjay" && <Demo/>}
    {name==="Rohan" && <Demo2/>}
    </>
    
  )
}


export default Radhe; 