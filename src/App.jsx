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
// import { Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Treatmentpage from './Pages/Treatmentpage'

const App = () => {
  return (
    <div>
      <Topbar />
      <Routes>
       <Route path= "/" element= { <Landingpage/>} ></Route>
       {/* <Route path= "homelink" element= {<Homepage/>}></Route> */}
       <Route path= "aboutlink" element={<Aboutpage/>}></Route>
       <Route path= "treatmentlink" element= {<Treatmentpage/>} > </Route>
        {/* <Bannersection />
        <Booking />
        <Nurse />
        <Treatment />
        <Doctors />
        <Footer />
        <Contactus /> */}
        {/* <Landingpage /> */}
      </Routes>
    </div>
  )
}

export default App
