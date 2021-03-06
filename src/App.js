import React from "react";
import ToastProvider from "react-toaster-minimal";
import About from "./containers/About/about";
import Features from "./containers/Features/features";
import Perks from "./containers/Perks/perks";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./containers/Landing/Landing";
import FaqSection from "./components/Faqs/FaqSection";
import Footer from "./components/Footer/Footer";
import WorkshopSection from "./containers/Workshop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Navbar />
        <Landing />
        <About />
        <div id="workshops" />
        <WorkshopSection />
        <Features />
        <Perks />
        <FaqSection />
        <Footer />
      </ToastProvider>
    </div>
  );
}

export default App;
