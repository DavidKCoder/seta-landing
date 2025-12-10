import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <Team />
      <Contact />
      <Footer year={year} />
    </>
  );
}

export default App;
