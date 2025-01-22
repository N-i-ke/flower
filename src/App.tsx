import React from "react";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Info from "./components/Info";
import Gallery from "./components/Gallery";
import Access from "./components/Access";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";
import "./reset.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainVisual />
      <main>
        <Info />
        <Gallery />
        <Access />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
