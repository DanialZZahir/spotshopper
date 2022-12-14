import logo from '../spot-logo.png';
import arrowsymbol from '../arrow-button.png';
import FormInput from './FormInput';
import { useState } from 'react';
import './Signuppage.css';

function Signuppage() {
  const [values, setValues] = useState({
    Username:"",
    Email:"",
    Password:"",
    ConfirmPassword:""
  });

  const inputs = [
    {
   id:0,
      name:"Username",
      type:"text",
      placeholder:"Username...",
      // errorMessage:"Email Address...",
      // label:"Username"
    },
    {
   id:1,
      name:"Email",
      type:"text",
      placeholder:"Email Address...",
      // errorMessage:"Email Address...",
      // label:"Email"
    },
    {
   id:2,
      name:"Password",
      type:"password",
      placeholder:"Password...",
      // errorMessage:"Email Address...",
      // label:"Password"
    }, 
    {
   id:3,
      name:"ConfirmPassword",
      type:"password",
      placeholder:"Confirm Password...",
      // errorMessage:"Email Address...",
      // label:"Confirm Password"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value })
  }

  console.log(values)

  
  const [ isClicked, setIsClicked ] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><h1 id="signuptext">SIGN UP</h1></div>
      <div className="signupformcontainer">
      <form onSubmit={handleSubmit}>
        {inputs.map(input=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          {/* <h1>{values.Username}</h1> */}
        
        <div >
            <button className="submitbutton" type="submit" onClick={() => setIsClicked(true)}>
              <img src={arrowsymbol}  width="50" height="50" alt="Right Arrow Button" /></button>
        </div>
        
      </form> 
      </div>
        <div id="alreadyuser"><p>Already a User?</p></div>
        {/* <link to='/Signinpage' id="signinlink">SIGN IN</link> */}
      </header>
    </div>
  );
}

export default Signuppage
