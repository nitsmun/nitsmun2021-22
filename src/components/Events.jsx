// *Hooks*
import { Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

// *CSS*
import "./Events.css";

const Events = (props) => {
  
  const imgs = props.execBoard;
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
          details.map(para => {
            return(
              <>
                {para}<br/><br/>
              </>
            )
          })
        }</div>

        <Link className="event-apply-btn" to={props.applyBtnLink}>Apply Now</Link>

        <div className="event-exec-board">
          <h3 className="event-exec-board-title">Executive Board :</h3>
          
          {imgs.map(image => {
            return(
              <img loading="lazy" src={image} alt="Judge" />
            )
          })}
        </div>
      </div>
    </Suspense>
  );
}

export default Events;