import React from 'react'
import '../pages/categoryMainPage.css'
import logo from '../spot-logo.png'
import footlocker from '../footlocker.png'
import productArrow from '../productArrow.png'

function CategoryMainPage() {
    return (
        <><header className="container">
            <div>
                <img src={logo} className="HomePage-logo" alt="logo" />
            </div>
            <div>
                <img src={footlocker} className="footlocker-logo" alt="logo" />
            </div>
            <div class='vertical-scroll'>
                <div className='productArrow'>
                    <img src={productArrow} className="productArrow" alt="productArrow" />
                </div>
            </div>

        </header>
        </>
    )
}

export default CategoryMainPage

// pages.map ( page , idx ) = > {
//     G
//       return < h3 key = { idx } onClick = { ( )
//           clickHandler ( page )
//       } } > { page.title } </ h3>