import React, {memo, useState}from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../CSS/Second.css'
const Main1 = () => {
const [todos]=useState(["Todo 1","Todo 2"]);
  const MainData ={
    data11:"Sanjay11",
    data22:"Sanjay22",
    data33:"Sanjay33",
    data44:"Sanjay44",
    data55:"Sanjay55",
    };
  return (
    <>
    <div style={{backgroundColor:'blue'}}></div>
    <nav className="navbar-class">
    <Link to ="/" className="Link1">Home1</Link>
    <Link to="/about" className="Link1">About1</Link>
    <Link to="/services" className="Link1">Services1</Link>
    <Link to="/price" className="Link1">Price1</Link>
    <Link to="/camp" className="Link1">Camp1</Link>
    </nav>
    <h2 style={{textAlign:'center', fontFamily:'sans-serif', fontSize:'20px'}}>Welcome to our website</h2>
    {/* <h1 style={{fontSize:'3.9rem'}}>{2+2},{4+4},{8+8},{16+16},{2+2},{4+4},{8+8},{16+16},{2+2},{4+4},{8+8},{16+16}</h1> */}
    <Outlet context={{MainData, todos}}/>
    </>
  )
}

export default memo(Main1);