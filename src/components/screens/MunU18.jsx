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
      With great pride and honour, we announced the first edition of NITS Junior
      MUN exclusively for school students. We believe that children and young
      teens should be exposed to the various intricacies of society and nations
      and should understand how the world functions from the grassroot level
      along with the challenges faced. It is only with proper grooming,
      experience and exposure that enables them to make changes in the society.
      Through this conference, we targeted students from grade VI to grade XII
      from schools all across the country.
      <br />
      <br />A day-long free-of-cost workshop was held a few days before the
      conference in order to acclimatise those without prior experience. Keeping
      in mind the various examination schedules of the Central and State Boards,
      we organised our conference from October 16, 2021 to October 17, 2021.
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
