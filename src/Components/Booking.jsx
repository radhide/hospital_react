import React from 'react'

const Booking = () => {
  return (
    <div className="bookingSection">
      <div className="bookingTitle">
        <h1><span>BOOK</span>
            APPOINTMENT
        </h1>
      </div>
      <div className='bookingForm'>
        <div className= "leftBooking cbook">
           <div className="">
             <div className="inputHeading">patient Name</div>
             <input type= "text"/>
           </div>
            <div className="">
                <div className="">Doctor's Name
                </div>
                <input type= "text"/>
            </div>
            <div className="">
                <div className="">Department's Name</div>
                <input type= "text"/>
            </div>
        </div>
        <div className="rightBooking cbook">
            <div className="">
              <div className="">phone Number</div>
              <input type= "number"/>
            </div>

            <div className="">
              <div className="">symptoms</div>
              <input type= "text"/>
            </div>
            
            <div className="">
              <div className="">choose Date</div>
              <input type= "date"/>
            </div>
            
        </div>

        <div className="submitBtn">
            <button>SUBMIT NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Booking
