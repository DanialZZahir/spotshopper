import React from 'react'
import './ShoppingCentreMainPage.css'
import logo from '../spot-logo.png'

function ShoppingCentreMainPage() {
  return (
    <><header className="container">
          <img src={logo} className="HomePage-logo" alt="logo" />
          <div className='centreNameBox'>
           <h2 id='centreNameText'>Westfield</h2>
          </div>
          <button className='shopNameBox'>
            <div>
              <h2 id='shopNameText'>JD Sports</h2>
            </div>
          </button>
      </header>
    </>
  )
}

export default ShoppingCentreMainPage