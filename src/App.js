import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactUs from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Gallery></Gallery>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
