import React from 'react'
import Footer from '../components/Footer'
import Gemsform from './Gemsform'
import Gems from '../components/Gems'

const Dashboard = () => {
  // Simple and easy styling for the dashboard just pulled in components and pages
  return (
    <main>
      <section className="flex">
        <Gemsform></Gemsform>
        <Gems></Gems>
      </section>

      <Footer />
    </main>
  )
}

export default Dashboard

