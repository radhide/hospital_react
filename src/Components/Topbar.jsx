import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className= "topbarSection">
      <div className="left nav">
        <img src="images/logo.png"/>
      </div>
      <div className="center nav">
        <div>
          <Link className="link"to ="/">
          Home
          </Link>
          </div>
        <div>
        <Link to ="aboutlink ">
          About
          </Link>
        </div>
        <div>
        <Link to ="treatmentlink ">
        Treatment
          </Link>
        </div>
        <div>
        <Link to ="doctorslink ">
          Doctors
          </Link>
        </div>
        <div>
        <Link to ="testimoniallink ">
        Testimonial
          </Link>
        </div>
        <div>
        <Link to ="contactlink ">
        Contact us
          </Link>
        </div>
      </div>

      <div className="right nav">
        <div>
          <FaUser/>
          login</div>
        <div>
         <FaUserLarge />
          signin</div>
          <div className="icon">
          <IoSearchSharp />
          </div>
      </div>
    </div>
  ) 
}

export default Topbar
