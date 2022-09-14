import logo from '../spot-logo.png';
import './Loadingpage.css';

function Loadingpage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="loadingPage-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Loadingpage;
