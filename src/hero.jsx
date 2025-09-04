import "./Hero.css";

function Hero() {
  return (
 <main>
            <img className="bg" src="../public/Desktop - 2.png" alt="" srcset="" />
    <div className="hero-container">
        <div className="title-hero">
                 <img src="https://storage.googleapis.com/gweb-one-cdn/one/uploads/a84a7a51fdea9f2da8a989fd5a69570cbb4afa78.svg" alt="" srcset="" />
         </div>
        <h1 className="hero-title">Security, Privacy, and Freedom in One Check</h1>
        {/* <p>Access global content, protect your data, and take advantage of quick, secure connections wherever.</p> */}
        <button>Get Senton VPN</button>
    </div>    
    {/* <div className="30d">
        <p>30 day money back</p>
        <p>24/7 live support</p>
        <p>100+ Servers  Worldwide</p>
    </div> */}
    <div className="bottom">
        <div className="left-small">
            <img src="https://storage.googleapis.com/gweb-one-cdn/one/uploads/62fbf74d3471dacc6afbe4660a5de719b2ed0edb.svg" alt="" />
        </div>
        <div className="right-text">
            <h2>Google AI Pro is free of charge for students until the end of the academic year 2026</h2>
            <p>Students also get access to NotebookLM, Whisk and 2 TB of storage at no charge. See if you're eligible for the student discount.</p  >
        </div>
    </div>

    <div className="lastone">
        <img src="../public/Desktop - 3.png" alt="" srcset="" />
    </div>
 </main>
  );
}

export default Hero;