// *Hooks*
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "./AnnualConference.css";

let props = {
  title : "Annual Conference | NITSMUN",
  heading : "Annual Conference",
  bgpic : "/img/annualConf.jpeg",

  eventDetails : [
    `NITSMUN has been organising its annual conference each year as a module under the cultural fest of
    NIT Silchar, Incandescence. The Annual conference of NITSMUN is three-days long, comprising of
    two sessions each day. The conference also includes a delightful lunch, where all the delegates from
    the different committees and the respective chairs along with the whole NITSMUN team sit together
    and dine.`,
    
    `Another very special and important part of the conference is the Socials Night, where
    everyone enjoys a fine evening chatting and mingling with each other. NITSMUN has built its stature
    as one of the premier MUN societies in all of North-East, and has been working with many brilliant
    and amazing people from the Indian MUN circuit as EBs for the annual conferences. Some wellknown names such as Rahul Menon, Ujan Natik, Soumyaneel Das and many more have chaired
    NITSMUN’s annual conferences, and have given overwhelming revies about the team.`
  ],

  conf : [
    {
      title : "2021",
      text : `Hello World1`,
      images : [
        "/img/judge2021_1.jpg",
        "/img/judge2021_2.jpg",
        "/img/judge2021_3.jpg",
        "/img/judge2021_4.jpg",
      ]
    },
    {
      title : "2020",
      text : `Hello World2`,
      images : [
        "/img/judge1.jpeg",
        "/img/judge2.jpeg",
        "/img/judge3.jpeg",
      ]
    }
  ],

  galleryImgs : [
    "/img/Carousel1.jpg",
    "/img/Carousel2.jpg",
    "/img/Carousel3.jpg",
    "/img/Carousel4.jpg",
    "/img/Carousel5.jpg",
    "/img/Carousel6.jpg",
    "/img/Carousel7.jpg",
  ],

  pastEvent : "Past Conferences",

  btn : {
    link : "/apply",
    display : "block",
    name : "Apply Now!"
  }

}

//TODO: Remove this function and make images as links
let imgOpen = (e) => {
  window.open(e.target.src, '_blank');
}

const AnnualConference = () => {
  
  const btn = props.btn;
  const details = props.eventDetails;
  
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

        {/* <div className="event-exec-board">
          <div className="past-title">{props.pastEvent}</div>
          {conf.map(year => 
            <React.Fragment key={year.title}>
              <h3 className="event-exec-board-title">{year.title}</h3>
              <p className="conf-text">{year.text}</p>
              {year.images.map((image, imgIndex) => 
                <img loading="lazy" onClick={imgOpen} key={`Event ${imgIndex}`} src={image} alt={`Event ${imgIndex}`} />
              )}
            </React.Fragment>
          )}
        </div>

        <div className="gallery">
          <div className="gallery-title">Gallery</div>
          <div className="gallery-img-ctnr">
            {galleryImgs && galleryImgs.map((image, imageIndex) =>
              <img loading="lazy" onClick={imgOpen} key={`Gallery ${imageIndex}`} src={image} alt={`Gallery ${imageIndex}`} />
            )}
          </div>
        </div> */}
      </div>
    </Suspense>
  );
}

export default AnnualConference;