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
      date="October 16, 2021"
      
      eventDetails= {[
        `With great pride and honour, we announce the first edition of NITS Junior MUN exclusively for school students. We believe that children and young teens should be exposed to the various intricacies of society and nations and should understand how the world functions from the grassroot level along with the challenges faced. It is only with proper grooming, experience and exposure that enables them to make changes in the society. Through this conference, we are targeting students from grade VI to grade XII from schools all across the country.`,
        `A day-long free-of-cost workshop will be held a few days before the conference in order to acclimatise those without prior experience. Keeping in mind the various examination schedules of the Central and State Boards, we have planned to organise our conference from October 16, 2021 to October 17, 2021. The cost of participation for the MUN conference has been set at ₹150 for individuals, with a special discounted offer of ₹125 per individual for group registrations. (discount only applicable to groups with 5 or more participants)`
      ]}
      
      applyBtnLink="/apply"
      displayBtn="block"
      btnContent="Apply Now"
    />
  );
}

export default MunU18;