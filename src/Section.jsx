import "./Section.css";

function Section() {
  return (
    <div className="background">
            <div className="selector">
                <p className="selected" >Create</p>
                <p className="selected">Work</p>
                <p className="selected">Learn</p>
                <p className="selected">Code</p>
            </div> 
            <div className="section-text">
                <h4> <span>Boost</span> your coding productivity</h4>
                <button>Upgrade Now</button>
            </div> 

            <div className="section-container">
                <div className="left-section">
                    <img src="https://lh3.googleusercontent.com/VsJAgvwvqCye-gcugnbIuO_s2VGUALCQbf9buAtg3y8B8tV6NjrNQZL13w4ZWStVS9B8zOsjVW3bWUp8i8TQSpW3ZWTUDHU9eIg=e365-pa-nu-w1432" alt="" />
                </div>
                <div className="right-section">
                    <h2>Code with AI</h2>
                    <p>Google AI Pro helps you write, debug, and understand code faster with AI-powered code generation and assistance. It supports multiple programming languages and integrates seamlessly with popular IDEs.</p>
                    <button>Get Started</button>
                </div>
            </div>
    </div>
        
  );
}

export default Section;