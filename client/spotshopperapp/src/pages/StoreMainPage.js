import React from "react";
import '../pages/StoreMainPage.css'
import logo from '../spot-logo.png'
import footlocker from '../footlocker.png'

function StoreMainPage() {
  return (
    <><header className="container">
    <img src={logo} className="HomePage-logo" alt="logo" />
    <div>
    <img src={footlocker} className="footlocker-logo" alt="logo" />
    </div>
    <div className="category">
      <button className="categoryBox">
        <h1 className="categoryName">Trainers</h1>
      </button>
    </div>
</header>
</>
  )
}

export default StoreMainPage