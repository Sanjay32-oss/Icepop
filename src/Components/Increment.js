import React, { useState } from 'react'
import '../CSS/Inr.css'

const Increment = () => {
const[count, setCount]=useState(0)
return ( 
<><div style={{border:'2px solid red', display:'inline-block', textAlign:'center', justifyContent:'center', padding:'12px'}}>
<h1 style={{fontSize:'35px'}}>Increment and Decrement Example</h1>
<h2 style={{fontSize:'20px'}}>COUNT:{count}</h2>
<button onClick={()=>{
setCount(count+1)
}} style={{marginBottom:'4px', fontSize:'15px'}}>Increment</button><br/>
<button onClick={()=>{
setCount(count-1)
}} style={{marginBottom:'4px', fontSize:'15px'}}>Decrement</button><br/>
<button onClick={()=>{
setCount(0)
}} style={{fontSize:'15px'}}>Reset</button>
</div>
</>
)
}

export default Increment; 