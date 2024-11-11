import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className= "topbarSection">
      <div className="left nav">
        <img src="images/logo.png"/>
      </div>
      <div className="center nav">
        <div>Home</div>
        <div>About</div>
        <div>Treatment</div>
        <div>Doctors</div>
        <div>Testimonial</div>
        <div>Contact us</div>
      </div>

      <div className="right nav">
        <div>
          <FaUser/>
          login</div>
        <div>
          signin</div>
          <IoSearchSharp />
      </div>
    </div>
  ) 
}

export default Topbar
