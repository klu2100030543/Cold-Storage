import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;