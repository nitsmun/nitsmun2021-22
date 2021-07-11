import { useEffect, useState } from 'react';
import { readString } from 'react-papaparse';

import "./Team.css";

var snsLogo = {
  "lin" : "fab fa-linkedin-in",
  "fb" : "fab fa-facebook-f",
  "insta" : "fab fa-instagram",
  "whatsapp" : "fab fa-whatsapp",
  "mail" : "far fa-envelope",
  "github" : "fab fa-github"
};

const Secretariat = (props) => {

  //! Change URL for CSV file
  var url = '/data.csv';
  let [data, setData] = useState(null);
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  //! CSS Grid Layout for SNS Links in Mobile
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
  }, [data]);

  //? CSV Parse
  useEffect(()=> {
    readString( url , {
      header: true,
      download: true,
      complete: (results) => {
        setData(results.data);
      }
    })
  }, [url])

  return (
    <div className="team">
      <div className="card-container">
        <div className="card-container-title">Team</div>
        
        {data && data.map(person => {
        return(
        <div className="mmbr-card" id={person['Name']}>
          <div className="mmbr-pic">
            <img loading="lazy" src={person.pic} alt={person['Name']} />
          </div>

          <div className="mmbr-name">{person.Name}</div>
          <div className="mmbr-position">{person.Post}</div>
          <div className="mmbr-batch">{person.Batch}</div>

          {/* SNS Item Links */}
          <div className="mmbr-sns">
            {Object.keys(snsLogo).map((site, index) => {
              if(person[site] === "") return null;
              return(
                <div className={`mmbr-sns-itm ${site}`} key={person.Name+person[site]+site}>
                  <a href={person[site]} target="_blank" rel="noreferrer" className={site}><i className={snsLogo[site]}></i></a>
                </div>
              )
            })}
          </div>

        </div>)})}

      </div>
    </div>
  )
}

export default Secretariat;