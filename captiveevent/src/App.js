import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import ServicesAll from "./Components/ServicesAll";
import AllServices from "./Components/AllServices";
import OurIconPage from "./Components/OurIconPage";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/all-services" element={<OurIconPage/>} />
          <Route path="/services" element={<AllServices/>} />
          <Route path="/OurIconPage" element={<OurIconPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
