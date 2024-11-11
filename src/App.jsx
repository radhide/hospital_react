import React from 'react'
import Topbar from './Components/Topbar'
import "./App.css"
import Bannersection from './Components/Bannersection'
import Booking from './Components/Booking'
import Footer from './Components/Footer'
import Treatment from './Components/Treatment'
import Doctors from './Components/Doctors'
import Nurse from './Components/Nurse'
import Contactus from './Pages/Contactus'
// import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Routes> */}
        <Topbar />
        <Bannersection />
        <Booking />
        <Nurse />
        <Treatment />
        <Doctors />
        <Footer />
        <Contactus />
      {/* </Routes> */}
    </div>
  )
}

export default App
