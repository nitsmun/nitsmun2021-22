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
      With great pride and honour, we announce the first edition of NITS Junior
      MUN exclusively for school students. We believe that children and young
      teens should be exposed to the various intricacies of society and nations
      and should understand how the world functions from the grassroot level
      along with the challenges faced. It is only with proper grooming,
      experience and exposure that enables them to make changes in the society.
      Through this conference, we are targeting students from grade VI to grade
      XII from schools all across the country.
      <br />
      <br />A day-long free-of-cost workshop will be held a few days before the
      conference in order to acclimatise those without prior experience. Keeping
      in mind the various examination schedules of the Central and State Boards,
      we have planned to organise our conference from October 16, 2021 to
      October 17, 2021.
    </>,
    <>
      <h5 style={{ color: "var(--theme4-100)", fontWeight: "bold" }}>
        WANT TO BE THE FACE OF NITS MODEL UNITED NATIONS?
      </h5>
      <br />
      Well now you can. NITSMUN is looking for ZONAL AMBASSADORS who can help us
      promote our upcoming Junior MUN conference among the students all over
      India and help them get acquainted with the Muning culture by resolving
      all their queries and doubts. Each state of India will have two Zonal
      Ambassadors, so that each one of you will have a helping hand. The Zonal
      Ambassadors will have to reach out to students/colleges/schools in their
      zones and publicize NITS Junior MUN by encouraging them to take part.
      Still confused about your roles? Don't worry, we'll help you with a step
      by step plan to make it crystal clear. DON'T MISS OUT THE PERKS-
      <br />
      <br />
      <br />
      i) Officially issued Certificates by NITSMUN for all those who complete
      every task successfully
      <br />
      ii) Special Letter of Recommendations for exceptional performers.
      <br />
      iii) Exciting cash prizes for the best performer
      <br />
      iv) Apart from all, first hand experience of working with one of the most
      prestigious MUN society of North East India
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
      <div className="event pb-0" id="munu18">
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
    </Suspense>
  );
};

export default MunU18;
