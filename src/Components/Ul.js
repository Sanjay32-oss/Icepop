import React from 'react'

const Ul = () => {
  const Data1=["Skyu","Rohan","Rohit","Shubham","Sohan"]
  const Data2=[
  {Id:1, Name:"Rohan"},
  {Id:2, Name:"Pohan"},
  {Id:3, Name:"Kohan"},
  {Id:4, Name:"Mohan"},
  {Id:5, Name:"Bohan"}
  ]
  return (
  <>
  <ul>
  {Data1.map((value,index)=>{
  return <li key={index}>{value}</li>
  })}
  </ul>
  <ul>
  {Data2.map((item)=>{
  return <li key={item.Id}>{item.Name}</li>
  })}
  
  </ul>
  </>
  )
}

export default Ul;