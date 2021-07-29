// *Hooks*
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "../Events.css";

let info = {
  title : "Mock MUNs | NITSMUN",
  heading : "Mock MUNs",
  bgpic : "/img/mockmun.jpg",

  eventDetails : [
    `Each year, NITSMUN conducts about one to two Mock MUN conferences for the freshmen to get
    familiar with the rules and proceedings of a MUN conference.`,
    
    `These conferences are chaired by the senior most members of the team and include a complete go through lesson of the rules and
    proceedings of a MUN conference. These mock sessions prepare the freshmen students for the
    annual conference.`,
  ],

  confImgs : [
    "/img/2021MM0.jpg",
    "/img/2021MM1.jpg",
    "/img/aoty2020_1.jpg",
    "/img/aoty2020_2.jpg",
    "/img/bg1_year.jpg",
    "/img/bg2_year.jpg",
    "/img/bg3_year.jpg",
    "/img/bg2_2020.JPG",
  ],

  btn : {
    link : "/apply",
    name : "Apply Now!",
    display : "block"
  }
}

//TODO: Remove this function and make images as links
let imgOpen = (e) => {
  window.open(e.target.src, '_blank');
}

const MockMun = () => {
  
  const confImgs = info.confImgs;
  const galleryImgs = info.galleryImgs;
  const details = info.eventDetails;
  const btn = info.btn;
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = info.title;
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src={info.bgpic} alt="Annual Conf" />
        </div>

        <div className="event-title"><strong>{info.heading}</strong></div>
        <div className="event-date">{info.date}</div>

        <div className="event-details">{
          details.map((para, index) => {
            return(
              <React.Fragment key={`para${index}`}>
                {para}
                <br/><br/>
              </React.Fragment>
            )
          })
        }</div>

        <Link className="event-apply-btn"
          to={btn.link}
          style={{
            display : `${btn.display}`
          }}
        >{btn.name}</Link>
      </div>
    </Suspense>
  );
}

export default MockMun;