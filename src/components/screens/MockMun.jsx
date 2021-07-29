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
        <div className="container my-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                    aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                    aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                    aria-label="Slide 8"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img loading="lazy" src="/img/2021MM0.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2021MM1.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/aoty2020_1.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/aoty2020_2.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/bg1_year.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/bg2_year.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/bg3_year.jpg" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/bg2_2020.JPG" width="450px" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
      </div>
    </Suspense>
  );
}

export default MockMun;