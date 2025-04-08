import React, { memo, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/Seventh.css";
import main from "../Components/Imagess/main.jpg";
import pexel6 from "../Components/Imagess/pexel6.png";
import pexel7 from "../Components/Imagess/pexel7.jpg";
import pexel8 from "../Components/Imagess/pexel8.jpg";
import Flavour1 from "../Components/Imagess/Flavour1.jpg";
import Flavour2 from "../Components/Imagess/Flavour2.jpg";
import Flavour3 from "../Components/Imagess/Flavour3.jpg";
import Flavour4 from "../Components/Imagess/Flavour4.jpg";
import Flavour5 from "../Components/Imagess/Flavour5.jpg";
import Flavour6 from "../Components/Imagess/Flavour6.jpg";
import Flavour7 from "../Components/Imagess/Flavour7.jpg";
import Flavour8 from "../Components/Imagess/Flavour8.jpg";
import Allpexel from "../Components/Imagess/Allpexel.jpg";
import con1 from "../Components/Imagess/con1.jpg";
import con2 from "../Components/Imagess/con2.jpg";
import con3 from "../Components/Imagess/con3.jpg";
import con4 from "../Components/Imagess/con4.jpg";
import con5 from "../Components/Imagess/con5.jpg";
import con6 from "../Components/Imagess/con6.jpg";
import con7 from "../Components/Imagess/con7.jpg";
import con8 from "../Components/Imagess/con8.jpg";
import con9 from "../Components/Imagess/con9.jpg";
// import pexel4 from '../Components/Imagess/pexel4.jpg'

const Home2 = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  const [homemenu, setHomemenu] = useState();
  return (
    <>
      <Link to="/About2">
        <h2 id="Sanj">
          <img src={pexel6} alt="pexel6" />
        </h2>
      </Link>
      <button
        style={{
          padding: "8px",
          fontSize: "1rem",
          fontFamily: "sans-serif",
          float: "right",
          margin: "12px",
          borderRadius: "5px",
          marginTop: "-45px",
        }}
        onClick={() => {
          setHomemenu(!homemenu);
        }}
      >
        MENU
      </button>
      <Link to="/Services2">
        <button
          style={{
            padding: "8px",
            fontSize: "1rem",
            fontFamily: "sans-serif",
            float: "right",
            margin: "12px",
            borderRadius: "5px",
            marginTop: "-45px",
          }}
        >
          FLAVOURS
        </button>
      </Link>
      {homemenu && (
        <div className="dropdown-menu">
          <Link to="/home2" className="navvar">
            Home
          </Link>
          <Link to="/about2" className="navvar">
            About
          </Link>
          <Link to="/services2" className="navvar">
            Flavours
          </Link>
          <Link to="/contactus2" className="navvar">
            Contactus
          </Link>
          <Link to="/another" className="navvar">
            Another
          </Link>
        </div>
      )}
      {/* <nav className='Navbar'>
    <Link to="/home2" className='navvar'>Home</Link>
    <Link to="/about2" className='navvar'>About</Link>
    <Link to="/services2" className='navvar'>Services</Link>
    <Link to="/contactus2" className='navvar'>Contact Us</Link>
    <Link to="/another" className='navvar'>Another</Link>
    </nav> */}
      <p className="para1">
        Technology is rapidly evolving, shaping the way we live, work, and
        communicate. From artificial intelligence to blockchain, innovations
        continue to transform industries and redefine possibilities. The rise of
        automation and machine learning has improved efficiency in various
        sectors, while advancements in mobile technology keep us connected like
        never before. As we move forward, ethical considerations and
        cybersecurity challenges must be addressed to ensure that technology
        serves humanity in a responsible and sustainable manner.
      </p>
      <br />
      <h1 id="grechen-fuemen-regular">
        <span className="sk1"> TRUE </span>
        <br />
        <span className="sk2"> ICE </span>
        <br />
        <span className="sk3"> CREAM </span>
      </h1>
      <section>
        <h1 id="Sk2">
          <p className="ss">
            This is Mr. Pops.
            <br />
            He'll come in even to those
            <br />
            who are completely
            <br />
            in different to ice cream.
            <br />
            <img src={main} alt="main" id="Sk3" />
            <br />
            <img src={pexel7} alt="pexel7" id="Sk4" />
            <br />
            <img src={pexel8} alt="pexel8" id="ww3" />
            <p id="ww2">
              Who has tried it, knows everything. Those who haven't - get ready
              for the <br />
              dopamine thirst of "that very taste"
              <mark style={{ borderRadius: "12%" }}>@MRS. SANJANA</mark>
              <br />
            </p>
            <p id="grechen-fuemen-regular1">
              Whether enjoyed in a cup, cone, or sandwiched between cookies, ice
              cream has the power to turn an ordinary moment into a special one.
              It's a universal language of happiness,,, bringing people together
              one scoop at a time. <br /> <br /> <br />
              The art of making ice cream has evolved over the years, with new
              trends like nitrogen-frozen ice cream and dairy-free alternatives
              taking over the market.,, Despite these innovations, the love for
              a simple cone on a hot summer day remains unchanged.
            </p>
          </p>
        </h1>
      </section>
      <section id="Sp1">
        <h1 className="Sp2">POPULAR'S FLAVOURS</h1>
        <br />
        <div className="FlavourContainer">
          <div id="Container">
            <img
              src={Flavour1}
              alt="Flavour1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              VALEENA CHOCLATE FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 200RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour2}
              alt="Flavour2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              MILK CHOCOLATE FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 300RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour3}
              alt="Flavour3"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              MILK CHOCOLATE FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 250RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour4}
              alt="Flavour5"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              CHOCOLATE BROWNIE FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 200RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour5}
              alt="Flavour5"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              CHOCOLATE CHIP FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 220RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour6}
              alt="Flavour6"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              CHOCOLATE TRUFFLE FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price: 350RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour7}
              alt="Flavour7"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              CHOCOLATE MINT FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              Price:320RS
            </button>
          </div>
          <div id="Container">
            <img
              src={Flavour8}
              alt="Flavour8"
              style={{ width: "100%", borderRadius: "10px", height: "56vh" }}
            />
            <h3
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                width: "90%",
                display: "inline-block",
              }}
            >
              CHOCOLATE ALMOND FLAVOUR
            </h3>
            <button
              style={{
                marginTop: "5px",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontFamily: "cursive",
                fontSize: "12px",
              }}
            >
              {" "}
              Price: 500RS
            </button>
          </div>
        </div>
      </section>
      <div id="alldp">
        <img src={Allpexel} alt="Allpexel" className="dpp" />
      </div>
      <div id="Section1">
        <h1
          style={{
            backgroundColor: "red",
            color: "whitesmoke",
            fontSize: "4rem",
            fontFamily: "sans-serif",
            letterSpacing: "4px",
            textAlign: "center",
            marginBottom: "0",
            marginTop: "0",
          }}
        >
          ICE CREAM VARIETY'S
        </h1>
        <div id="section22">
          <img src={con1} alt="con1" className="gk" />
          <img src={con2} alt="con2" className="gk" />
          <img src={con3} alt="con3" className="gk" />
          <img src={con4} alt="con4" className="gk" />
          <img src={con5} alt="con5" className="gk" />
          <img src={con6} alt="con6" className="gk" />
          <img src={con7} alt="con7" className="gk" />
          <img src={con8} alt="con8" className="gk" />
          <img src={con9} alt="con9" className="gk" />
        </div>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h2 className="grechen-fuemen-regular1">TRUE ICE CREAM</h2>
                <p className="description">
                  Empowering people through innovation and technology. Eat Our
                  healthy Sugar free icecream. Stay Safe and Stay Healthy
                  <br />
                  <mark style={{ borderRadius: "5px" }}>
                    @MR SANJAY SINGHANIA
                  </mark>
                </p>
              </div>

              <div>
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                  <li>
                    <Link to="/" className="link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about2" className="link">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services2" className="link">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus2" className="link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="footer-title">
                  Follow Us On Social Media Platforms
                </h3>
                <div className="social-links">
                  <a href="https://www.facebook.com/" className="social-icon">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://x.com/" className="social-icon">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://www.instagram.com/" className="social-icon">
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjay-kumar-91b1a22b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ba%2BCG5dCsS9C8n26tsEjmkQ%3D%3D"
                    className="social-icon"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p>
                &copy; {new Date().getFullYear()} YourBrand. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <Outlet />
    </>
  );
};
export default memo(Home2);
