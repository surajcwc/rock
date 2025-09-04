import "./banner.css";
import { FaHome } from "react-icons/fa";   // FontAwesome

function Banner() {
  return (
    <div className="ban">
        <div className="text">
            <p>Google AI Pro is free for university students for 1 year, including limited access to video generation with Veo 3 Fast. <span>Learn More</span></p>
        </div>
        
        <div className="icon">
            <fa-solid fa-xmark /> 
        </div>
    </div>
  );
}

export default Banner;