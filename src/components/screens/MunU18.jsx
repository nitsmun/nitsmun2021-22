// *Hooks*
import React, { Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";
import Table from "../Table";

// *CSS*
import "../Events.css";
import "./MunU18.css";

let props = {
  title : "NITS Junior MUN | NITSMUN",
  heading : "NITS Junior MUN",
  bgpic : "/img/munu18.jpg",
  
  eventDetails : [
    `With great pride and honour, we announce the first edition of NITS Junior MUN exclusively for school students. We believe that children and young teens should be exposed to the various intricacies of society and nations and should understand how the world functions from the grassroot level along with the challenges faced. It is only with proper grooming, experience and exposure that enables them to make changes in the society. Through this conference, we are targeting students from grade VI to grade XII from schools all across the country.`,
    `A day-long free-of-cost workshop will be held a few days before the conference in order to acclimatise those without prior experience. Keeping in mind the various examination schedules of the Central and State Boards, we have planned to organise our conference from October 16, 2021 to October 17, 2021. The cost of participation for the MUN conference has been set at ₹150 for individuals, with a special discounted offer of ₹125 per individual for group registrations (discount only applicable to groups with 5 or more participants).`
  ],
  
  btn: [
    {
      link: "/apply",
      display: "block",
      name: "Delegates"
    },
    {
      link: "/apply",
      display: "block",
      name: "Zonal Ambassadors"
    },
    {
      link: "/apply",
      display: "block",
      name: "Workshop"
    },
  ]
}

const MunU18 = () => {
  
  const details = props.eventDetails;
  const btns = props.btn;
  
  const applyBtns = useRef();

  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
   if(window.location.pathname === "/events/mun-u18/apply") window.scrollTo(0, applyBtns.current.offsetTop);
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src={props.bgpic} alt="Annual Conf" />
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

        <Table/>

        <div className="buttons">
          <span className="apply-for buttons-itm" ref={applyBtns}>Apply For: </span>
          {btns.map(btn => (
            <Link className="event-apply-btn buttons-itm" key={btn.name}
              to={btn.link}
              style={{
                display : `${btn.display}`
              }}
            >{btn.name}</Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default MunU18;