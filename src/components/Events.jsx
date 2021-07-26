// *Hooks*
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

// *CSS*
import "./Events.css";

const Events = (props) => {
  
  const imgs = props.imgs;
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
            display : `${props.displayBtn}`}}
        >{props.btnContent}</Link>

        <div className="event-exec-board">

          {imgs && imgs.map(year => 
            <React.Fragment key={year.title}>
              <h3 className="event-exec-board-title">{year.title}</h3>
              {year.images.map((image, imgIndex) => 
                <img loading="lazy" key={`Event ${imgIndex}`} src={image} alt={`Event ${imgIndex}`} />
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default Events;