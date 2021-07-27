// *Hooks*
import { useEffect } from "react";
import Events from '../Events';

const AnnualConference = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Events
      title="Annual Conference"
      bgpic="/img/annualConf.jpeg"
      date={null}
      
      eventDetails= {[
        `NITSMUN has been organising its annual conference each year as a module under the cultural fest of
      NIT Silchar, Incandescence. The Annual conference of NITSMUN is three-days long, comprising of
      two sessions each day. The conference also includes a delightful lunch, where all the delegates from
      the different committees and the respective chairs along with the whole NITSMUN team sit together
      and dine.`,
      
      `Another very special and important part of the conference is the Socials Night, where
      everyone enjoys a fine evening chatting and mingling with each other. NITSMUN has built its stature
      as one of the premier MUN societies in all of North-East, and has been working with many brilliant
      and amazing people from the Indian MUN circuit as EBs for the annual conferences. Some wellknown names such as Rahul Menon, Ujan Natik, Soumyaneel Das and many more have chaired
      NITSMUN’s annual conferences, and have given overwhelming revies about the team.`]}
      
      confImgs={
        [
          {
            title : "2021",
            images : [
              "/img/judge2021_1.jpg",
              "/img/judge2021_2.jpg",
              "/img/judge2021_3.jpg",
              "/img/judge2021_4.jpg",
            ]
          },
          {
            title : "2020",
            images : [
              "/img/judge1.jpeg",
              "/img/judge2.jpeg",
              "/img/judge3.jpeg",
            ]
          }
        ]
      }

      galleryImgs={[
        "/img/Carousel1.jpg",
        "/img/Carousel2.jpg",
        "/img/Carousel3.jpg",
        "/img/Carousel4.jpg",
        "/img/Carousel5.jpg",
        "/img/Carousel6.jpg",
        "/img/Carousel7.jpg",
      ]}
      
      applyBtnLink="/apply"
      displayBtn="block"
      btnContent="Apply Now"
      pastEvent="Past Conferences"
    />
  );
}

export default AnnualConference;