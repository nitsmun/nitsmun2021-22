// *Hooks*
import React, { Suspense, useEffect } from "react";
// import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "./AnnualConference.css";

let info = {
    title: "NITSMUN2022 | NITSMUN",
    heading: "NITSMUN2022",
    bgpic: "/img/annualConf.jpeg",

    eventDetails: [
        `After conducting numerous conferences, both online and offline, and hosting delegates from different schools and colleges from across the country, NITSMUN is all set for its conference scheduled to be held on the 12 and 13 March, 2022. Owing to the current situation, this conference will be conducted online, giving a chance to students from any nook and corner of the country or around the world to participate. `,

        ``,

        `We will be having three committees this year:`,

        `UNSC (United Nations Security Council), whose agenda is “The Occupation of major water ways for strong military presence overseas and it's impact on overseas trade”.`,

        `UNEP (United Nations Environment Programme), with the agenda “Eliminating the domestic and international trafficking and illegal trade of wildlife”.`,

        `We will, for the first time, also be having the International Press Corps, or IPC which will allow participants to act as unbiased journalists, reporting on the proceedings of each simulation in the Conference. They will get a chance to investigate committee debates, conduct interviews, edit articles, and cover press conferences.`,

        `The theme for the year is “Nous voyons notre avenir”, French for “We see our future”. The pandemic has made us realise that if we don’t work together, we won’t be able to go ahead. We are our future, and until all of humanity comes together, it will be impossible to make this planet liveable.`
    ],

}

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

                <div className="event-title"><strong>{info.heading}</strong></div>

                <div className="event-details">{
                    details.map((para, index) => {
                        return (
                            <React.Fragment key={`para${index}`}>
                                {para}
                                <br /><br />
                            </React.Fragment>
                        )
                    })
                }</div>

            </div>
        </Suspense>
    );
}

export default NITSMUN2022;