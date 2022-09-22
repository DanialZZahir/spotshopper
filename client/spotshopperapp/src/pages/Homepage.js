import React from 'react'
import rightarrow from '../rightarrow.png'
import './Homepage.css'
import logo from '../spot-logo.png'

function Homepage() {
  return (
    <><header className="container">
          <img src={logo} className="HomePage-logo" alt="logo" />
          <div>
            <h2 id='homePageText'>FIND A SHOPPING CENTRE</h2>
          </div>
      <div className="centreBox">
      <button className="centreButton">
        <img className="rightarrow" src={rightarrow} alt="" />
      </button>
      </div>
      </header>
    </>
  )
}

export default Homepage