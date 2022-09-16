import React from 'react'
import logo from '../spot-logo.png';
import './Centrepage.css'

function centrePage() {
    return (
        <div className="container">

            <img src={logo} className="spot-logo" alt="logo" />
        </div>
    )
}

export default centrePage