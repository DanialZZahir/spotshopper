import React from 'react'
// import Test from './test'
import './App.css'
import { useState } from 'react';
import Signuppage from './pages/Signuppage'
import Loadingpage from './pages/Loadingpage';
import arrowsymbol from '../src/arrow-button.png'

function App() {
    const [ isClicked, setIsClicked ] = useState(false);
    return (
        <div>
            <button className="firstbutton" onClick={() => setIsClicked(!isClicked)}>
            <img src={arrowsymbol}  width="50" height="50" alt="Right Arrow Button" />
            </button>
            {isClicked ? <Signuppage /> : <Loadingpage />}
        </div>
    )
}

export default App