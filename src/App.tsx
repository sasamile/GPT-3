import { Brand, Cta, Navbar } from "./components/shared";
import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Possibility from "./components/Possibility";
import WhatGpt3 from "./components/WhatGpt3";

function App() {
  return (
    <>  
      <div>
        <div className="gradiente__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
