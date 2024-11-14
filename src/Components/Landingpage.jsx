import React from 'react'
import Bannersection from './Bannersection'
import Booking from './Booking'
import Nurse from './Nurse'
import Treatment from './Treatment'
import Doctors from './Doctors'
import Footer from './Footer'
import Contactus from '../Pages/Contactus'
import Topbar from './Topbar'

const Landingpage = () => {
  return (
    <div>
        {/* <Topbar/> */}
        <Bannersection/>
        <Booking/>
        <Nurse/>
        <Treatment />
        <Doctors />
        <Footer />
        <Contactus />
    </div>
  )
}

export default Landingpage
