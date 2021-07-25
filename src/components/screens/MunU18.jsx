// *Hooks*
import { useEffect } from "react";
import Events from '../Events';

const MunU18 = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Events
      title="NITSMUN Under 18 Edition"
      bgpic="/img/annualConf.jpeg"
      date="TBA"
      
      eventDetails= {[
        `After hosting multiple successful conferences in both online and offline modes, NITSMUN will be conducting its first ever Model United Nations conference exclusively for school students. We at NITSMUN believe that children should be exposed to the various ways the society, nation and the world function. Only with proper grooming, experience and exposure can they make a change in the society.`,
        `The NITSMUN - Under 18 Edition will be held from 16-17th October 2021, focusing and helping shape the young minds and prepare them for all their future endeavours.`
      ]}
      
      applyBtnLink="/apply"
      execBoard={["/img/judge2021_1.jpg", "/img/judge2021_2.jpg", "/img/judge2021_3.jpg"]}
      displayBtn="none"
      btnContent="Apply Now"
    />
  );
}

export default MunU18;