
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import FeatureShowcase from './components/FeatureShowcase';
import Process from './components/Process';
import Scalability from './components/Scalability';
import Pricing from './components/Pricing';
import Guarantees from './components/Guarantees';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Transformation />
        <FeatureShowcase />
        <Process />
        <Scalability />
        <Pricing />
        <Guarantees />
      </main>
      <Footer />
    </div>
  );
};

export default App;
