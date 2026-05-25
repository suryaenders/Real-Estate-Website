// import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
