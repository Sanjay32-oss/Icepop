// import React, { useEffect, useRef, useState } from 'react'
// import '../CSS/Sk1.css'
// const Sky = () => {
// const[inputvalue, setInputvalue]=useState("")
// const Counter=useRef(0)

// useEffect(()=>{
// Counter.current=Counter.current+1;
// },[inputvalue])
//   return (
//     <>Sky Page
//     <h1>Form Option</h1>
//     <input type='text' value={inputvalue} onChange={(e)=>{
//     setInputvalue(e.target.value);
//     }}/> <br/>
//     <h1 style={{fontSize:'20px'}}>Counter:{Counter.current}</h1>
//     </>
//   )
// }

// export default Sky;

// import React, { useRef } from 'react'

// const Sky = () => {
// const input=useRef("");
// const inputfocus=()=>{
// input.current.focus();
// }
// return (
// <><h1>Sky</h1>
// <input type='text' ref={input} style={{height:'4vh'}}/><br/><br/><br/>
// <button onClick={inputfocus} style={{fontSize:'15px'}}>Click On this Button</button>
// </>
// )
// }
// export default Sky;