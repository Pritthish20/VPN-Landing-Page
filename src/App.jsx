import React from 'react'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Second } from './components/Second';
import { Third } from './components/Third';
import { Fourth } from './components/Fourth';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Second/>
      <Third/>
      <Fourth/>
      <Footer/>
    </div>
  )
}
export default App;
