import React, { useEffect, useState } from 'react';
import { readString } from 'react-papaparse';
import "./Team.css";

var snsLogo = {
  "mail" : "far fa-envelope",
  "lin" : "fab fa-linkedin-in",
  "fb" : "fab fa-facebook-f",
  "github" : "fab fa-github"
};

const Team = (props) => {

  //! URL, TITLE for CSV files & Groups
  let url = [
    ["/secretariat.csv", "Secretariat"],
    ["/designTeam.csv", "Design Team"],
    ["/researchAndContentTeam.csv", "Research & Content Team"],
    ["/publicRelationsTeam.csv", "Public Relations Team"],
    ["/webDevTeam.csv", "Web Development Team"]
  ];
  let [data, setData] = useState([]);
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);
  
  //? CSV Parse
  useEffect(()=> {

    url.forEach((urlArr, i) => {
      
      readString(urlArr[0], {
        download: true,

        complete: (results) => {

          setData(()=> {
            let arr = data;
            arr[i] = results.data;
            return arr;
          });
        }
      });
    });
  }, [data]);
  
  var snsKeyCounter = 1;
  var personKeyCounter = 1;


  // ! Data -> Array of result from csv files in order of url[i][0]
  // ! Team -> Name, Post, Batch, pic, mail, lin, fb, github
  // ?          0     1       2    3    4     5    6    7
  // ! Teams don't have any first row with headers because array starts
  // ! with the headers since multiple files' data in single array

  return (
  <div className="team">
    <div className="card-container">

      {data.map((team, index) => {
        console.log(team);
        return(
          
          <React.Fragment key={url[index][1]}>

            <div className="card-container-title">{url[index][1]}</div>
            {console.log(team)}
            {team && team.map(person => {
              return(
              <div className="mmbr-card" id={person[0]} key={personKeyCounter++ && personKeyCounter}>
                
                <div className="mmbr-pic">
                  <img loading="lazy" src={person[3]} alt={person[0]} />
                </div>

                <div className="mmbr-name">{person[0]}</div>
                <div className="mmbr-position">{person[1]}</div>

                {/* SNS Item Links */}
                <div className="mmbr-sns">
                  
                  {Object.keys(snsLogo).map((site, siteIndex) => {
                    if(person[siteIndex + 4] === "") return null;
                    return(
                      <div className={`mmbr-sns-itm ${site}`} key={snsKeyCounter++ && snsKeyCounter}>
                        <a href={person[siteIndex + 4]} target="_blank" rel="noreferrer" className={site}><i className={snsLogo[site]}></i></a>
                      </div>
                    )
                  })}

                </div>

              </div>)}

            )}
          </React.Fragment>
        )
      })}
    </div>
  </div>
  )
}

export default Team;