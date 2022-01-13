import React from "react";
import Home from "./components/Home/Home"; 
import Menu from "./components/Menu/Menu";
import Buttomhome from "./components/ContentHome/Buttomhome";
import Contact from "./components/Contact/Contact";
import Navbarindex from "./components/Navbar/Navbarindex";
import Footer from "./components/Footer/Footer";
import NoMatch from "./components/NoMatch/NoMatch";
import { Routes , Route  } from "react-router-dom";
import "./App.css";

function App(){  
  return (
    <div className="App">
       <Navbarindex />
      <Routes>
      <Route  path="/" exact element={ <Home/> } />
        <Route  path="/menu" exact element={ <Menu/> } />
        <Route  path="/about" exact element={ <Buttomhome/> } />
        <Route  path="/contact" exact element={ <Contact/> } />
        <Route path="*" element={ <NoMatch/> } />
      </Routes>
      <Footer/>

    </div>
  );
}
export default App;

