import React from 'react'

const Bannersection = () => {
  return (
    <div className="bannerSection">
      <div className="bannerLeft banner">
        <div className="title">
            <span>MOON</span>
            <h1>HOSPITAL</h1>
        </div>
      <p>our highly experienced staff knows exactly
        how to assist international<br/> patients like yourself
        we go extra mile to not only provide treatment
        but also undivided attention and care 
      <br/> 
          
      </p>

        <div className="contactBtn">
          <button>contact us</button>
        </div>
      </div>
      
      <div className="bannerRight banner">
        <img src ="treatmentimages/picture2.jpg"/>
      </div>
    </div>
  )
}

export default Bannersection
