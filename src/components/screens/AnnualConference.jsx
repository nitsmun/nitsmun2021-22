// *Hooks*
import React, { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "./AnnualConference.css";

let info = {
  title : "Annual Conference | NITSMUN",
  heading : "Annual Conference",
  bgpic : "/img/annualConf.jpeg",

  eventDetails : [
    `NITSMUN has been organising its annual conference each year as a module under the cultural fest of
    NIT Silchar, Incandescence. The Annual conference of NITSMUN is three-days long, comprising of
    two sessions each day. The conference also includes a delightful lunch, where all the delegates from
    the different committees and the respective chairs along with the whole NITSMUN team sit together
    and dine.`,
    
    `Another very special and important part of the conference is the Socials Night, where
    everyone enjoys a fine evening chatting and mingling with each other. NITSMUN has built its stature
    as one of the premier MUN societies in all of North-East, and has been working with many brilliant
    and amazing people from the Indian MUN circuit as EBs for the annual conferences. Some wellknown names such as Rahul Menon, Ujan Natik, Soumyaneel Das and many more have chaired
    NITSMUN’s annual conferences, and have given overwhelming revies about the team.`
  ],

  conf : [
    {
      title : "2021",
      text : `The NITSMUN 2021 Conference  was a 3 day long event held from the 26th to the 28th of February 2021 via zoom meetings, being the first Annual conference of ours which was conducted online due to the Covid 19 pandemic. We had two  committees namely, UNOOSA and UNHSC. The chair and vice chair for UNOOSA committee were Mr. Ujan Natik and Mr. Manas Pratim Sharma respectively. The UNHSC committee was chaired by Mr. Soumyaneel Das and the vice chair for the same was Mr. Aban Mandal. The agendas for the committees were ‘Legal regime of outer space and Global space governance’ for UNOOSA and ‘1991-1999: The dissolution of the USSR and post Soviet Crisis’ for UNHSC respectively. 

      The conference began with a mock session for delegates to familiarize themselves with the proceedings of the sessions. There was a great response from the students of NIT Silchar and other colleges of the state. As the sessions went on, the quality and quantity of debates and caucuses kept on increasing and got tremendously engaging. The chairs and the vice chairs guided the delegates thoroughly and made everyone acquainted with the dos and don’ts of a MUN. 
      The evening of socials was a delightful, the secretariat members gave performances for the delegates and the Executive Board Members which was followed by performances by the delegates.
      
      The MUN concluded with the formation of various working papers on the agenda and the resolution was passed in the end. The annual conference was a well-choreographed, systematic event and was a result of immense teamwork, perseverance and dedication. According to a delegate of UNOOSA, “It was a wonderful first time experience in a MUN, with talented competitors and top-notch EBs, and the conference was undeniably one of the best events that I attended in NIT Silchar online.”`,
      images : [
        "/img/judge2021_1.jpg",
        "/img/judge2021_2.jpg",
        "/img/judge2021_3.jpg",
        "/img/judge2021_4.jpg",
      ]
    },
    {
      title : "2020",
      text : `The 2020 annual MUN conference took place from February 14th to February 16th, coinciding with the start of Incandescence, the college's annual cultural fest. It was a three-day conference that featured a variety of intense debates and discussions on different real-world challenges and their solutions. The first out of the two committees was the United Nations Security Council (UNSC), where delegates from across the country exchanged views and deliberated on one of the world's most pressing issues, “To evaluate the threat to international security posed by Turkey’s invasion of Syria and to discuss and formulate the working consequence and possible solutions to Turkey’s safe zone development plan in Syria”. The other committee was the United Nations General Assembly (UNGA) where delegates came together and discussed on the agenda “Reassessing the SDGs affirming them with rigid viable goals and to check the viability of currently ongoing climatic programmes”. The conference was graced by notable members from different MUN circuits in India including Rahul Menon, Ujan Natik, and Garima Rajpal whose presence, experience and motivation enhanced the level of talks, resulting in both committees passing their Draft Resolutions. One of the most memorable parts of the conference was the Crisis committee where delegates from both committees sat down together to tackle the crisis at hand. The delegates’ socials was a splendid affair, with plenty of opportunities for delegates to socialise and lobby. It provided them a chance to unwind after a long day of heated debates about world issues.`,
      images : [
        "/img/judge1.jpeg",
        "/img/judge2.jpeg",
        "/img/judge3.jpeg",
      ]
    }
  ],

  galleryImgs : [
    "/img/Carousel1.jpg",
    "/img/Carousel2.jpg",
    "/img/Carousel3.jpg",
    "/img/Carousel4.jpg",
    "/img/Carousel5.jpg",
    "/img/Carousel6.jpg",
    "/img/Carousel7.jpg",
  ],

  pastEvent : "Past Conferences",

  btn : {
    link : "/apply",
    display : "none",
    name : "Apply Now!"
  }

}

//TODO: Remove this function and make images as links
// let imgOpen = (e) => {
//   window.open(e.target.src, '_blank');
// }

const AnnualConference = () => {
  
  const btn = info.btn;
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

        <Link className="event-apply-btn"
          to={btn.link}
          style={{
            display : `${btn.display}`
          }}
        >{btn.name}</Link>

        {/* <div className="event-exec-board">
          <div className="past-title">{props.pastEvent}</div>
          {conf.map(year => 
            <React.Fragment key={year.title}>
              <h3 className="event-exec-board-title">{year.title}</h3>
              <p className="conf-text">{year.text}</p>
              {year.images.map((image, imgIndex) => 
                <img loading="lazy" onClick={imgOpen} key={`Event ${imgIndex}`} src={image} alt={`Event ${imgIndex}`} />
              )}
            </React.Fragment>
          )}
        </div>

        <div className="gallery">
          <div className="gallery-title">Gallery</div>
          <div className="gallery-img-ctnr">
            {galleryImgs && galleryImgs.map((image, imageIndex) =>
              <img loading="lazy" onClick={imgOpen} key={`Gallery ${imageIndex}`} src={image} alt={`Gallery ${imageIndex}`} />
            )}
          </div>
        </div> */}
      </div>
    </Suspense>
  );
}

export default AnnualConference;