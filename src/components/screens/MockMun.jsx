// *Hooks*
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "../Events.css";

let props = {
  title : "Mock MUNs | NITSMUN",
  heading : "Mock MUNs",
  bgpic : "/img/annualConf.jpeg",

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
  
  const confImgs = props.confImgs;
  const galleryImgs = props.galleryImgs;
  const details = props.eventDetails;
  const btn = props.btn;
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src="/img/annualConf.jpeg" alt="Annual Conf" />
        </div>

        <div className="event-title"><strong>{props.heading}</strong></div>
        <div className="event-date">{props.date}</div>

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