// *Hooks*
import React, { Suspense, useEffect } from "react";
// import { Link } from "react-router-dom";

import "../WorkshopsGallery.css";
import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "./AnnualConference.css";
import "./NITSMUN2022.css";

let info = {
  title: "NITSMUN 2022 | NITSMUN",
  heading: "NITSMUN 2022",
  bgpic: "/img/annualConf.jpeg",

  eventDetails: (
    <>
      After conducting numerous conferences, both online and offline, and
      hosting delegates from different schools and colleges from across the
      country, NITSMUN is all set for its conference scheduled to be held on the
      12 and 13 March, 2022. Owing to the current situation, this conference
      will be conducted online, giving a chance to students from any nook and
      corner of the country or around the world to participate.
      <br />
      <br />
      <br />
      We will be having three committees this year:
      <br />
      <br />
      UNSC (United Nations Security Council), with the agenda{" "}
      <b>
        “The Occupation of major water ways for strong military presence
        overseas and it's impact on overseas trade”
      </b>
      .
      <br />
      <br />
      UNEP (United Nations Environment Programme), with the agenda{" "}
      <b>
        “Eliminating the domestic and international trafficking and illegal
        trade of wildlife
      </b>
      ”.
      <br />
      <br />
      IPC (International Press Corps) which will allow participants to act as unbiased journalists,
      reporting on the proceedings of each simulation in the Conference. They
      will get a chance to investigate committee debates, conduct interviews,
      edit articles, and cover press conferences. <b>"If you prefer writing over
        speaking, be a member of the International Press and keep a check on the
        delegates!"</b>
      <br />
      <br />
    </>
  ),

  endingDetails: (
    <>
      The theme for the year is <b>“Nous voyons notre avenir”</b>, French for <b>“We see
        our future”</b>. The pandemic has made us realise that if we don't work
      together, we won't be able to go ahead. We are our future, and until all
      of humanity comes together, it will be impossible to make this planet
      liveable.
    </>
  ),
};

const NITSMUN2022 = () => {
  // const btn = info.btn;
  const details = info.eventDetails;

  useEffect(() => {
    // *Setting Up Page Title*
    document.title = info.title;
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src={info.bgpic} alt="Annual Conf" />
        </div>

        <div className="event-title">
          <strong>{info.heading}</strong>
        </div>

        <div className="event-details">{details}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5 p-3">
              <img
                className="img-fluid"
                src="/img/UNSCbg12022.jpg"
                alt="unsc"
              />
            </div>
            <div className="col-md-5 p-3">
              <img
                className="img-fluid"
                src="/img/UNEPbg12022.jpg"
                alt="unep"
              />
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-lg-0 mt-3">
              <img
                className="img-fluid"
                src="/img/international_press.jpg"
                alt="unep"
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="event-details">{info.endingDetails}</div>

        
        <br/><br/>
        <div className="container gallery-container">
        <h1 style={{ fontVariant: "small-caps" }}>Executive Board</h1>
        <div className="tz-gallery active-tz">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j1.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j2.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j3.jpg" alt="nitsmun" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j4.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j5.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j6.jpg" alt="nitsmun" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j7.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j8.jpg" alt="nitsmun" />
              </div>
              <div className="col-sm-12 col-md-4">
                <img src="/img/nm22j9.jpg" alt="nitsmun" />
              </div>
            </div>
          </div>
        </div>

        <div className="nitsmun-gallery mt-lg-5 mt-0">
          <span className="about">Glimpses from</span>
          <h2>
            Past<span> Conferences</span>
          </h2>
          <div className="container my-4">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="6"
                  aria-label="Slide 7"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    loading="lazy"
                    src="/img/Carousel2.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel3.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel4.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel5.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel6.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel7.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/Carousel1.jpg"
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default NITSMUN2022;
