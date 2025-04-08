import React from 'react'

const Event1 = () => {
const shoot=()=>{
alert("Hello Everyone, Myself Sanjay kumar")
}
const shoot2=(message)=>{
alert(`"Hello Everyone, Good Morning to all of you.${message}"`);  // pass extra message in this code----------
};
const shoot1=()=>{
alert("Hello Everyone, Good Afternoon to all of you");
}
const shoot3=()=>{
alert("Hello Everyone, Good Evening to all of you");
}
  return (
    <>
    <button onClick={shoot}>Tap to button to get ouput</button>
    <button onClick={shoot2("My Name is Sanjay Kumar")}>Take a shoot when click on button</button>
    <button onMouseOver={shoot1}>Don't click on button only mouseover on button</button>
    <button onMouseLeave={shoot3}>Don't click on button only mousedown on button</button>
    <div>Event1</div></>
  )
}


export default Event1;