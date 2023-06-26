import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Footer />
    </div>
  )
}
