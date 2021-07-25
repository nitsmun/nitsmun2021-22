// *Hooks*
import { useEffect } from "react";
import Events from '../Events';

const GlobalVoicesMun = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Events
      title="Global Voices MUN"
      bgpic="/img/annualConf.jpeg"
      date="TBA"
      
      eventDetails= {[
        `NITSMUN has a strong international presence, with delegates from Singapore, Malaysia, and other nations attending the conferences. NITSMUN collaborated with The DAIS and many other MUN societies from across the country to host the 3rd conference of Global Voices MUN from November 21, 2020, to December 20, 2020, to commemorate The United Nations' 75th anniversary. The GVMUN program lasted a month and included a variety of conferences and free workshops.`,
        `The conference of NITSMUN was explicitly held on December 5, 2020, which commenced after the speech of the honourable guest, Prof Sivaji Bandyopadhyay, Director of NIT Silchar. He congratulated NITSMUN for welcoming freshers into the MUNning and debating circuits. With the intention of sensitizing the students on SDGs, the committee of simulation was decided as UNESCO and the agenda, “Achieving Inclusive and Quality Education through equitable online learning for all, keeping in view socio-economic and cultural wellness”. Mr. Devesh Gupta, the founder of Emerge India, spoke at the end of the conference, emphasising the importance of public speaking and decision-making in MUNs. This collaboration intended to enhance youth awareness of global goals and find solutions to pressing challenges such as Climate Change, Gender Equality, and Quality Education.`,
        `This was a global platform, and youth from all over the world participated. It was a successful event that brought together people from all backgrounds and perspectives to discuss and find solutions to the world's problems.`
      ]}
      
      applyBtnLink="/apply"
      
      imgs={
        [
          {
            title : "2020",
            images : [
              "/img/2020GV1.jpg",
              "/img/2020GV2.jpg",
              "/img/2020GV3.jpg",
              "/img/2020GV4.jpg",
              "/img/2020GV5.jpg",
              "/img/2020GV6.jpg",
              "/img/2020GV7.jpg"
            ]
          }
        ]
      }
      
      displayBtn="none"
      btnContent="Apply Now"
    />
  );
}

export default GlobalVoicesMun;