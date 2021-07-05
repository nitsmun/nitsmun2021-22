// *Hooks*
import { useEffect } from "react";

// *CSS*
import "./History.css";

var agendaPic = [
  "/img/aoty2020_1.jpg",
  "/img/aoty2020_2.jpg",
  "/img/bg2_2020.JPG",
  "/img/bg2019.JPG",
  "/img/bg12017.png",
  "/img/bg2018.JPG",
  "/img/bg1_year.jpg",
  "/img/bg2_year.jpg",
  "/img/bg3_year.jpg",
];

var execPic = [
  ["/img/judeg2021_1.jpg", /*"Soumyaneel Das"*/ ""],
  ["/img/judeg2021_2.jpg", /*"Aban Mandal"*/ ""],
  ["/img/judeg2021_3.jpg", /*"Manas Pratim Sharma"*/ ""],
  ["/img/judge2.jpeg", /*"Garima Rajpal"*/ ""],
  ["/img/judge3.jpeg", /*"Ujan Natik"*/ ""],
  ["/img/judge4_Aniket_Aich.JPG", "Aniket Aich"],
  ["/img/judge5.jpg", "Sehrish Hazarika"]
];


const History = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <div className="hstry">
      <div className="hstry-intro">

        {/* History */}
        <div className="hstry-intro-title">NITS MUN Over The Years</div>
        <div className="hstry-intro-text">
          NITSMUN was founded in 2014 when a group of like-minded people wanted to create a society for younger people to discuss, debate and deliberate present day crises whilst experiencing themselves being in the shoes of various world leaders. Ever since the first MUN session in 2014, our society has grown manifold with more enthusiastic people joining in and helping us emerge as one the best and most promising MUN societies in NE India. Besides having participated in various MUNs in and around the city and bringing home numerous accolades and valuable experience, we have also hosted MUNs every single year since, with awe-inspiring members of the EB training and guiding us to think rationally, act quickly and solve modern day problems and at the same time also provide us with the support required.
        </div>
      </div>

      <div className="gallery-intro-title">
        Glimpses Of Previous Conference
      </div>

      {/* Agenda Over Years */}
      <div className="hstry-albm">
        <div className="hstry-albm-title">Agendas Over The Years</div>
      
        <div className="hstry-albm-itm-cntnr">
          
          {agendaPic.map((agenda, index) => {
            return (
              <div className="hstry-albm-itm" key={index}>
                <img loading="lazy" src={agenda} alt={'agenda ' + (index+1)} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Executive Board */}
      <div className="exec-albm">
        <div className="exec-albm-title">Executive Board Over The Years</div>

        <div className="exec-albm-itm-cntnr">
          
          {execPic.map((exec, index) => {
            return (
              <div className="exec-itm" key={index}>
                <img loading="lazy" src={exec[0]} alt={'exec ' + (index+1)} />
                {exec[1].length > 0 && <div className="exec-name">{exec[1]}</div>}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default History;