
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import QuoteSection from './components/QuoteSection'

import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ flex: 1 }}>
        <Hero />
        <QuoteSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
