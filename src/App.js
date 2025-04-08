import React from "react";
import "./App.css";
// import Index12 from "./Components/Index12";
// import Sky from "./Components/Sky";
// import Sanjay from "./Components/Sanjay";
// import Sanjay1 from "./Components/Sanjay1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home2 from "./Components/Home2";
import About2 from "./Components/About2";
import Services2 from "./Components/Services2";
import Contactus2 from "./Components/Contactus2";
import Another from "./Components/Another";
// import Index12 from "./Components/Index12";
// import Todo from "./Components/Todo";
// import Increment from "./Components/Increment";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Main1 from "./Components/Main1";
// import Home1 from "./Components/Home1";
// import Services1 from "./Components/Services1";
// import About1 from "./Components/About1";
// import Price1 from "./Components/Price1";
// import Camp1 from "./Components/Camp1";
// import Event1 from "./Components/Event1";
// import Ul from "./Components/Ul";
// import Form3 from "./Components/Form3";
// import Form from "./Components/Form";
// import Form1 from "./Components/Form1";
// import Uoop from "./Components/Uoop";
// import Demo from "./Components/Demo";
// import Radhe from "./Components/Radhe";
// import Demo2 from "./Components/Demo2";
// import About from "./Components/About";
// import Services from "./Components/Services";
// import Price from "./Components/Price";
// import Contactus from "./Components/Contactus";
// import Home from "./Components/Home";
// import Main from "./Components/Main";

const App = () => {
  return (
    <>
      {/* <Index12 /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contactus" element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

      {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main1/>}>
    <Route index element={<Home1/>}/>
    <Route path="/about" element={<About1/>}/>
    <Route path="/services" element={<Services1/>}/>
    <Route path="/price" element={<Price1/>}/>
    <Route path="/camp" element={<Camp1/>}/>
    </Route>
    </Routes>
    </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home2" element={<Home2 />} />
          <Route path="/" element={<Home2 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/services2" element={<Services2 />} />
          <Route path="/contactus2" element={<Contactus2 />} />
          <Route path="/another" element={<Another />} />
        </Routes>
      </BrowserRouter>

      {/* <Event1/> */}
      {/* <Ul/> */}
      {/* <Form3/> */}
      {/* <Form/> */}
      {/* <Form1/> */}
      {/* <Uoop/>
    <Demo2/>
    <Radhe/>
    <Demo/> */}
      {/* <Increment/> */}
      {/* <Todo/> */}
      {/* <Sanjay1/>
    <Sanjay/> */}
      {/* <Sky/> */}
    </>
  );
};

export default App;
