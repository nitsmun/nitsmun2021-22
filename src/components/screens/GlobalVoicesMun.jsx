// *Hooks*
import React, { Suspense, useEffect } from "react";

import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "./GlobalVoicesMun.css";

let info = {
  title : "Global Voices MUN | NITSMUN",
  heading : "Global Voices MUN",

  bgpic : "/img/gvmun.jpg",

  eventDetails : [
    `NITSMUN has a strong international presence, with delegates from Singapore, Malaysia, and other nations attending the conferences. NITSMUN collaborated with The DAIS and many other MUN societies from across the country to host the 3rd conference of Global Voices MUN from November 21, 2020, to December 20, 2020, to commemorate The United Nations' 75th anniversary. The GVMUN program lasted a month and included a variety of conferences and free workshops.`,
    `The conference of NITSMUN was explicitly held on December 5, 2020, which commenced after the speech of the honourable guest, Prof Sivaji Bandyopadhyay, Director of NIT Silchar. He congratulated NITSMUN for welcoming freshers into the MUNning and debating circuits. With the intention of sensitizing the students on SDGs, the committee of simulation was decided as UNESCO and the agenda, “Achieving Inclusive and Quality Education through equitable online learning for all, keeping in view socio-economic and cultural wellness”. Mr. Devesh Gupta, the founder of Emerge India, spoke at the end of the conference, emphasising the importance of public speaking and decision-making in MUNs. This collaboration intended to enhance youth awareness of global goals and find solutions to pressing challenges such as Climate Change, Gender Equality, and Quality Education.`,
    `This was a global platform, and youth from all over the world participated. It was a successful event that brought together people from all backgrounds and perspectives to discuss and find solutions to the world's problems.`
  ],

  images : [
    "/img/2020GV1.jpg",
    "/img/2020GV2.jpg",
    "/img/2020GV3.jpg",
    "/img/2020GV4.jpg",
    "/img/2020GV5.jpg",
    "/img/2020GV6.jpg",
    "/img/2020GV7.jpg",
  ]
}

//TODO: Remove this function and make images as links
// let imgOpen = (e) => {
//   window.open(e.target.src, '_blank');
// }

const GlobalVoicesMun = () => {

  const details = info.eventDetails;
  
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

        {/* <div className="event-exec-board">
          <div className="past-title">{props.pastEvent}</div>
          {confImgs && confImgs.map(year => 
            <React.Fragment key={year.title}>
              <h3 className="event-exec-board-title">{year.title}</h3>
              {year.images.map((image, imgIndex) => 
                <img loading="lazy" onClick={imgOpen} key={`Event ${imgIndex}`} src={image} alt={`Event ${imgIndex}`} />
              )}
            </React.Fragment>
          )}
        </div> */}

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
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img loading="lazy" src="/img/2020GV1.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV2.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV3.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV4.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV5.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV6.jpg" className="d-block img-fluid" alt="NITS MUN"/>
                </div>
                <div className="carousel-item">
                    <img loading="lazy" src="/img/2020GV7.jpg" className="d-block img-fluid" alt="NITS MUN"/>
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

export default GlobalVoicesMun;