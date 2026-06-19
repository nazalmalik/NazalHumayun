import React from "react";
import Header from "./components/header/Header"
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

import Portfolio from "./components/portfolio/Portfolio";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Navcomp from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <Navcomp />
      <Header />
      <About />
      <Skills />
      <Service/>
      <Portfolio />
      <Contact />
      
    </div>
  );
}

export default App;
