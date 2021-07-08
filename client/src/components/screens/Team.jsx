import { useEffect } from 'react';

import "./Team.css";

var snsLogo = {
  "lin" : "fab fa-linkedin-in",
  "fb" : "fab fa-facebook-f",
  "insta" : "fab fa-instagram",
  "whatsapp" : "fab fa-whatsapp",
  "mail" : "far fa-envelope",
  "github" : "fab fa-github"
};

var person = {
  "name" : "John Doe",
  "position" : "Secretary General",
  "wing": "Web Development Team",
  "batch" : "2020 - 2024",
  "img" : "/img/member.jpg",
  "sns" : [
    ["lin", "https://www.linkedin.com/school/national-institute-of-technology-silchar/"],
    ["fb", "https://www.facebook.com/NITSMUN/?ref=br_rs"],
    ["insta", "https://www.instagram.com/nitsmun/"],
    ["mail", "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=team.nitsmun@gmail.com&tf=1"],
    ["whatsapp", "https://api.whatsapp.com/send?phone=+919435537377"],
    ["github", "https://github.com/AdityaKotari/nitsmun2021-22"]
  ]
}

const Secretariat = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  useEffect(()=> {
    let snsCont = document.getElementsByClassName('mmbr-sns');
    for(let i = 0; i<snsCont.length; i++) {
      let snsItmLength = snsCont[i].getElementsByClassName('mmbr-sns-itm').length;
      
           if(snsItmLength === 1) snsCont[i].style.gridTemplateColumns = "repeat(1, 1fr)";
      else if(snsItmLength === 2) snsCont[i].style.gridTemplateColumns = "repeat(2, 1fr)";
      else if(snsItmLength === 3) snsCont[i].style.gridTemplateColumns = "repeat(3, 1fr)";
      else if(snsItmLength === 4) snsCont[i].style.gridTemplateColumns = "repeat(2, 1fr)";
      else if(snsItmLength === 5) snsCont[i].style.display = "flex";
      else if(snsItmLength === 6) snsCont[i].style.gridTemplateColumns = "repeat(3, 1fr)";
    }
  }, []);

  return (
    <div className="team">
      
      <div className="card-container">
        <div className="card-container-title">Web Development Team</div>
        
        <div className="mmbr-card" id={person.name}>
          <div className="mmbr-pic">
            <img src={person.img} alt="MEMBER_NAME" />
          </div>

          <div className="mmbr-name">{person.name}</div>
          <div className="mmbr-position">{person.position}</div>
          <div className="mmbr-wing">{person.wing}</div>
          <div className="mmbr-batch">{person.batch}</div>

          <div className="mmbr-sns">
            {person.sns.map(site => {
              return(
                <div className={`mmbr-sns-itm ${site[0]}`} key={site[1]}>
                  <a href={site[1]} target="_blank" rel="noreferrer" className={site[0]}><i className={snsLogo[site[0]]}></i></a>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Secretariat;