// *Hooks*
import React, { Suspense, useEffect } from "react";

import Agenda from "../Agenda";
import Loading from "../Loading";
// import Table from "../Table";

// *CSS*
import "../Events.css";
import "./MunU18.css";

let info = {
  title: "NITS Junior MUN | NITSMUN",
  heading: "NITS Junior MUN",
  bgpic: "/img/munu18.jpg",

  eventDetails: [
    <>
      Model United Nations (MUN) is an educational simulation in which students
      can learn about diplomacy, international relations, and the United
      Nations. Students play as delegates and involve themselves in heated
      debates to bring in solutions for some of the most important issues of
      recent times. Model UN organizations hold conferences that bring together
      students from elementary to college levels and provide a platform to
      discuss global issues through a formal procedure.
      <br />
      <br />
      After successfully conducting NITS Junior MUN exclusively for school
      students last year and with its great success , NITSMUN is proud to
      announce the second edition of NITS Junior MUN exclusively for school
      students from 6th August to 7th August 2022.
    </>,
  ],
};

const MunU18 = () => {
  const details = info.eventDetails;

  useEffect(() => {
    // *Setting Up Page Title*
    document.title = info.title;
    if (window.location.hash === "#register")
      window.onload = () => {
        window.scrollTo(0, document.body.scrollHeight);
      };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="event pb-0"
        id="munu18"
        style={{ color: "var(--color-8-100)" }}
      >
        <div className="event-pic">
          <img loading="lazy" src={info.bgpic} alt="Annual Conf" />
        </div>
        <div className="event-title">
          <strong>{info.heading}</strong>
        </div>
        <div className="event-details">
          <>
            {details[0]}
            <br />
            <br />
          </>
        </div>
        <div>
          <Agenda />
        </div>
        {/* <br /> */}
        {/* <div className='event-details'>
					<>
						{details[1]}
						<br />
						<br />
					</>
				</div> */}
      </div>
      <br />
    </Suspense>
  );
};

export default MunU18;
