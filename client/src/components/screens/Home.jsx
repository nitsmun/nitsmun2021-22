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
      <div className="home-sec" id="intro">Intro</div>
      
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