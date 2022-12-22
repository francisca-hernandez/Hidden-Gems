import React from 'react'
// import ReactDOM from "react-dom";
import Footer from '../components/Footer'
import { NavItem } from 'reactstrap'
import Header from '../components/Header'

// Simple homepage styling importing components
const Homepage = () => {
  return (
    <div>
      <main>
        <NavItem></NavItem>
      </main>
      <header>
        <Header />
      </header>
      <Footer />
    </div>
  )
}

export default Homepage
