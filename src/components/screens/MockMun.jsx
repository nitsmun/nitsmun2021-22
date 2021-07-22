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
      date="TBA"
      
      eventDetails= {[
        `Each year, NITSMUN conducts about one to two Mock MUN conferences for the freshmen to get
        familiar with the rules and proceedings of a MUN conference.`,
        
        `These conferences are chaired by the senior most members of the team and include a complete go through lesson of the rules and
        proceedings of a MUN conference. These mock sessions prepare the freshmen students for the
        annual conference. `,
      ]}
      
      applyBtnLink="/apply"
      execBoard={["/img/judge2021_1.jpg", "/img/judge2021_2.jpg", "/img/judge2021_3.jpg"]}
    />
  );
}

export default MockMun;