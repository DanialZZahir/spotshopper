import logo from '../spot-logo.png';
import './Loadingpage.css';

function Loadingpage() {
  return (
    <div className="container">
      <header className="App-header">
        <div>
          <h3 id="welcome">WELCOME!</h3>
        </div>
        <img src={logo} className="loadingPage-logo" alt="logo" />
         <div>
          <h4 id="convenient">Convenient Shopping.</h4>
        </div>
      </header>
    </div>
  );
}

export default Loadingpage;
