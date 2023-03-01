import React from 'react'
import { Footer,Navbar,Welcome,Services, Transactions } from "../components"


const Home = () => {
  return (
    <div className="m-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
  </div>
  )
}

export default Home