import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
