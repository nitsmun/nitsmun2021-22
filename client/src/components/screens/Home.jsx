// *Components*
import {Link} from 'react-router-dom';

import Timer from "../Timer";
import Table from "../Table";

// *CSS*
import "./Home.css";
import Article from '../Article';
import Director from '../Director';

const Home = () => {
  
  return (
    <div className="home">

      {/*Intro Section*/}
      <div className="home-sec" id="intro">

        <div className="intro-logo">
          <img loading="lazy" src="/img/logoBigWhite.svg" alt="NITSMUN"/>
        </div>

      </div>
      
      {/*Timer Section */}
      <div className="home-sec" id="apply">
        <Timer/>
        <Link to="/apply_ST" className="btn apply-btn">Apply Now</Link>
        <Table/>

      </div>
      
      {/*Director's Message Section*/}
      <div><Director/></div>
      {/* <div className="home-sec" id="director">Director Message</div> */}

      {/* Article & Social */}
      <div><Article/></div>
      
      {/*Articles Section*/}
      {/* <div className="home-sec" id="articles"><Article/></div> */}
      
      {/*Social Section*/}
      {/* <div className="home-sec" id="social">Social</div> */}

    </div>
  );
}

export default Home;