import React from "react";
import '../pages/ItemMainPage.css'
import logo from '../spot-logo.png'
import footlocker from '../footlocker.png'

function ItemMainPage() {
  return (
    <><header className="container">
      <img src={logo} className="HomePage-logo" alt="logo" />
      <div>
        <img src={footlocker} className="footlocker-logo" alt="logo" />
      </div>
      <div className="options">
        <button className="reserveButton">
          <h1 className="reserveText">Reserve</h1>
        </button>
        <button className="buyButton">
          <h1 className="buyText">Buy Now</h1>
        </button>
      </div>
    </header>
    </>
  )
}

export default ItemMainPage