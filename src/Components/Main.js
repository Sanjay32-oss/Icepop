import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/First.css'
const Main = () => {
  let xyz=20;
  if(xyz<20){
  console.log("This is true")
  }
  else{
  console.log("This is false")
  };
  return (
    <>
    <header>
    <nav className="navbar">
    <Link to="/" className="link">Home</Link>
    <Link to="/services" className="link">Services</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/contactus" className="link">Contactus</Link>
    <Link to="/price" className="link">Price</Link>
    </nav>
    <h1 className="welcome-message">Welcome To our Website</h1>
    <button className="Btn-class">Sign Up</button>
    </header>

    <footer className="footer-class">
    <p>@2025 My Website. All right reserved@2025 My Website. All right reserved </p>
    </footer>
    </>
  )
}

export default Main;