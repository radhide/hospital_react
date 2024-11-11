import React from 'react'

const Bannersection = () => {
  return (
    <div className="bannerSection">
      <div className="bannerLeft banner">
        <div className="title">
            <span>MICO</span>
            <h1>HOSPITAL</h1>
        </div>
      <p>when looking at its layout. The point of 
        using Lorem Ipsum is that it<br/> has a
         more-or-less normal distribution of letters, 
      as opposed to</p>

        <div className="contactBtn">
          <button>contact us</button>
        </div>
      </div>
      
      <div className="bannerRight banner">
        <img src ="images/slider-img.jpg"/>
      </div>
    </div>
  )
}

export default Bannersection
