import React, {memo, useEffect}from 'react'
import Flavour1 from '../Components/Imagess/Flavour1.jpg'
import Flavour2 from '../Components/Imagess/Flavour2.jpg'
import Flavour3 from '../Components/Imagess/Flavour3.jpg'
import Flavour4 from '../Components/Imagess/Flavour4.jpg'
import Flavour5 from '../Components/Imagess/Flavour5.jpg'
import Flavour6 from '../Components/Imagess/Flavour6.jpg'
import Flavour7 from '../Components/Imagess/Flavour7.jpg'
import Flavour8 from '../Components/Imagess/Flavour8.jpg'
import Flavour9 from '../Components/Imagess/Flavour9.jpg'
import Flavour10 from '../Components/Imagess/Flavour10.jpg'
import Flavour11 from '../Components/Imagess/Flavour11.jpg'
import Flavour12 from '../Components/Imagess/Flavour12.jpg'
import Flavour13 from '../Components/Imagess/Flavour13.jpg'
// import Flavour14 from '../Components/Imagess/Flavour14.jpg'
import Flavour15 from '../Components/Imagess/Flavour15.jpg'
import Flavour16 from '../Components/Imagess/Flavour16.jpg'
import Flavour17 from '../Components/Imagess/Flavour17.jpg'
import '../CSS/Services2.css'

const Services2 = () => {
  useEffect(() => {
    document.body.classList.add('service-page');
    return () => {
        document.body.classList.remove('service-page'); 
    };
}, []);

  return (
    <>  
      <div className="FlavourContainer">        
        <div id="Container22">
        <img src={Flavour1} alt="Flavour1" style={{ width: "100%", borderRadius: "10px" }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        VALEENA CHOCLATE FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 200RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour2} alt="Flavour2" style={{ width: "100%", borderRadius: "10px" }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        MILK CHOCOLATE FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 300RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour3} alt="Flavour3" style={{ width: "100%", borderRadius: "10px", height:'56vh'}} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px",width: "90%", display:'inline-block'}}>
        MILK CHOCOLATE FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 250RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour4} alt="Flavour4" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE BROWNIE FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 200RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour5} alt="Flavour5" style={{ width: "100%", borderRadius: "10px", height:'56vh'}} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE CHIP FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 220RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour6} alt="Flavour6" style={{ width: "100%", borderRadius: "10px", height:'56vh'}} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE TRUFFLE FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 350RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour7} alt="Flavour7" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE MINT FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price:320RS
        </button>
      </div>
      <div id="Container22">
        <img src={Flavour8} alt="Flavour8" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE ALMOND FLAVOUR
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour9} alt="Flavour9" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE TRUPLE ICE CREAM
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>


      <div id="Container22">
        <img src={Flavour10} alt="Flavour10" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE NUT ICECREAM
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour11} alt="Flavour11" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE WALNUT ICECREAM

        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour12} alt="Flavour12" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE PEANUT ICECREAM
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour13} alt="Flavour13" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE COFFEE ICE CREAM (MOCHA)
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour17} alt="Flavour17" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE CARAMEL ICECREAM

        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour15} alt="Flavour15" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE MARSHMALLOW ICECREAM

        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>

      <div id="Container22">
        <img src={Flavour16} alt="Flavour16" style={{ width: "100%", borderRadius: "10px", height:'56vh' }} />
        <h3 style={{ backgroundColor: "red", color: "white", padding: "5px", width: "90%", display:'inline-block'}}>
        CHOCOLATE TRUFFLE ICECREAM
        </h3>
        <button style={{ marginTop: "5px", padding: "8px", backgroundColor: "black", color: "white", borderRadius: "5px", border: "none",
        cursor: "pointer", fontFamily:'cursive', fontSize:'12px'
        }}>
        Price: 500RS
        </button>
      </div>
      </div>
    </>
  )
}

export default memo(Services2)