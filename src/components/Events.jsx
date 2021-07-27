// *Hooks*
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

// *CSS*
import "./Events.css";

//TODO: Remove this function and make images as links
let imgOpen = (e) => {
  window.open(e.target.src, '_blank');
}

const Events = (props) => {
  
  const confImgs = props.confImgs;
  const galleryImgs = props.galleryImgs;
  const details = props.eventDetails;

  return (
    <Suspense fallback={<Loading/>}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src="/img/annualConf.jpeg" alt="Annual Conf" />
        </div>

        <div className="event-title">{props.title}</div>
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
          to={props.applyBtnLink}
          style={{
            display : `${props.displayBtn}`
          }}
        >{props.btnContent}</Link>

        <div className="event-exec-board">
          {confImgs && props.pastEvent && <div className="past-title">{props.pastEvent}</div>}
          {confImgs && confImgs.map(year => 
            <React.Fragment key={year.title}>
              <h3 className="event-exec-board-title">{year.title}</h3>
              {year.images.map((image, imgIndex) => 
                <img loading="lazy" onClick={imgOpen} key={`Event ${imgIndex}`} src={image} alt={`Event ${imgIndex}`} />
              )}
            </React.Fragment>
          )}
        </div>

        <div className="gallery">
          {galleryImgs && <div className="gallery-title">Gallery</div>}
          <div className="gallery-img-ctnr">
            {galleryImgs && galleryImgs.map((image, imageIndex) =>
              <img loading="lazy" onClick={imgOpen} key={`Gallery ${imageIndex}`} src={image} alt={`Gallery ${imageIndex}`} />
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Events;