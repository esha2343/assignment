import "./App.css";
import React from "react";
import ContentSection from "./components/ContentSection";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import OrbitingCirclesDemo from "./components/OrbitingCirclesDemo";


function App() {
  return (
    <div className="App">
      <Navbar />
      <OrbitingCirclesDemo />
      <ContentSection />
    </div>
  );
}

export default App;
