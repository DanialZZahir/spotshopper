import React from 'react'
// import Test from './test'
import './App.css'
import { useState } from 'react';
import Signuppage from './pages/Signuppage'
import Loadingpage from './pages/Loadingpage';

function App() {
    const [ isClicked, setIsClicked ] = useState(false);
    return (
        <div>
            <button className="firstbutton" onClick={() => setIsClicked(!isClicked)}>Submit</button>
            {isClicked ? <Signuppage /> : <Loadingpage />}
        </div>
    )
}

export default App