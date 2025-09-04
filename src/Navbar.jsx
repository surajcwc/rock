import "./Navbar.css";

function Navbar() {
  return (
    <nav>
        <div className="Left">
          <img className="logo" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_PrimaryLogo_FullColor_1.original.png" alt="" srcset="" /> 
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