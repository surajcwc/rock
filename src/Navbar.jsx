import "./Navbar.css";
import Logo from "./assets/newrewr.png"
function Navbar() {
  return (
    <nav>
        <div className="Left">
          <img className="logo" src={Logo} alt="" srcset="" /> 
        </div>
        <div className="links">
             <ul>
                <li><a href="https://google.com"> Home</a></li>
                <li> <a href="https://google.com"> About</a></li>
                <li><a href="https://google.com"> Contact</a></li>
            </ul>
        </div>
        <div className="right">
            <button>Download</button>
        </div>
     
    </nav>
  );
}

export default Navbar;