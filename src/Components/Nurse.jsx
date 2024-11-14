import React from 'react'

const Nurse = () => {
  return (
    <div className="nurseSection">
      <div className="nurseImage section">
        <img src ="treatmentimages/ICU.webp"/>
      </div>

      <div className="rightColumn section">
        <div className="subMenu">
            <h1>ABOUT <span>HOSPITAL</span></h1>
        </div>
        <div>
            <p>has a more-or-less normal distribution
                 of letters, as opposed to using 
                 'Content here, content here', making it look 
                 like readable English. Many desktop publishing packages
                  and web page editors has a more-or-less normal distribution of letters, as 
                  opposed to using 'Content here, content
                   here', making it look like readable English.
                 Many desktop publishing packages and 
                 web page editors</p>
        </div>
        <div>
            <button>
                Read More
            </button>
        </div>
      </div>
    </div>
  )
}

export default Nurse
