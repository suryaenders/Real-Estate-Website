// import React from 'react'
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <About />
        <Footer />
        <Header />
        <Projects />
        <Testimonials />
        <Contact />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
