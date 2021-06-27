// *Components*
import {Link} from 'react-router-dom';

import Timer from "../Timer";
import Table from "../Table";

// *CSS*
import "./Home.css";

const Home = () => {
  
  return (
    <div className="home">

      {/*Intro Section*/}
      <div className="home-sec" id="intro">

        <div className="intro-logo">
          <img src="/img/logo.svg" alt="NITSMUN"/>
        </div>

        <a href="#apply" className="intro-down-link">
          <i className="fas fa-chevron-down"></i>
        </a>

        {/* <div className="intro-img" id="intro-img1">
          <img src="/img/introSVG1.svg" alt="SVG Img"/>
        </div>
        <div className="intro-img" id="intro-img2">
          <img src="/img/introSVG2.svg" alt="SVG Img"/>
        </div>
        <div className="intro-img" id="intro-img3">
          <img src="/img/introSVG3.svg" alt="SVG Img"/>
        </div> */}

      </div>
      
      {/*Timer Section */}
      <div className="home-sec" id="apply">
        <Timer/>
        <Table/>

        <Link to="/apply_ST" className="btn apply-btn">Apply Now</Link>
      </div>
      
      {/*Director's Message Section*/}
      <div className="home-sec" id="director">Director Message</div>
      
      {/*Secretary General's Message Section*/}
      <div className="home-sec" id="general">Secretary General Message</div>
      
      {/*About Us Section*/}
      <div className="home-sec" id="about">About Us</div>

    </div>
  );
}

export default Home;