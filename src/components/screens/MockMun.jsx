// *Hooks*
import { useEffect } from "react";
import Events from '../Events';

const MockMun = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Events
      title="Mock MUNs"
      bgpic="/img/annualConf.jpeg"
      date={null}
      
      eventDetails= {[
        `Each year, NITSMUN conducts about one to two Mock MUN conferences for the freshmen to get
        familiar with the rules and proceedings of a MUN conference.`,
        
        `These conferences are chaired by the senior most members of the team and include a complete go through lesson of the rules and
        proceedings of a MUN conference. These mock sessions prepare the freshmen students for the
        annual conference.`,
      ]}
      
      confImgs={
        [
          {
            title : "2021",
            images : [
              "/img/2021MM0.jpg",
              "/img/2021MM1.jpg",
              "/img/aoty2020_1.jpg",
              "/img/aoty2020_2.jpg"
            ]
          },
          {
            title : "2020",
            images : [
              "/img/bg1_year.jpg",
              "/img/bg2_year.jpg",
              "/img/bg3_year.jpg",
              "/img/bg2_2020.JPG",
            ]
          }
        ]
      }

      applyBtnLink="/apply"
      displayBtn="block"
      btnContent="Apply Now"
    />
  );
}

export default MockMun;