import React, { useEffect, useState } from 'react';
import "./Team.css";

var snsLogo = {
  "mail" : "far fa-envelope",
  "lin" : "fab fa-linkedin-in",
  "fb" : "fab fa-facebook-f",
  "github" : "fab fa-github"
};


  //! URL, TITLE for CSV files & Groups
const url = [
  ["/secretariat.csv", "Secretariat"],
  ["/designTeam.csv", "Design Team"],
  ["/researchAndContentTeam.csv", "Research & Content Team"],
  ["/publicRelationsTeam.csv", "Public Relations Team"],
  ["/webDevTeam.csv", "Web Development Team"]
];

//? CSV Parse
function csvTextToArr(text) {
  let csvArr = text.split('\r\n');
  // ! Windows ends line in \r\n, Unix in \n 
  
  let result = [];
  for(let i = 0; i<csvArr.length; i++) {
    let personArr =  csvArr[i].split(',')
    result.push(personArr);
  }

  return result;
}

async function csvFetch() {

  let arr = [], promiseArr = [];

  url.forEach((urlArr, i) => {
    promiseArr[i] = fetch(urlArr[0]).then((res)=> res.text())
  });
  
  await Promise.allSettled(promiseArr).then((results)=> {
    
    for(let i = 0; i<results.length; i++) {
      arr[i] = csvTextToArr(results[i].value.toString());
    }
  })

  return arr;
}

const Team = (props) => {

  let [data, setData] = useState(null);

  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;

    (async() => setData(await csvFetch()))();

  }, [props.title]);

  // ! Data -> Array of result from csv files in order of url[i][0]
  // ! Team -> Person
  // ! Person  -> Name, Post, Batch, pic, mail, lin, fb, github
  // ?             0     1       2    3    4     5    6    7
  // ! Teams don't have any first row with headers because array starts
  // ! with the headers since multiple files' data in single array

  return (
  <div className="team">
    <div className="card-container">
      {/* {data && data[0][0][0]} */}

      {data && data.map((team, teamIndex) => {
        return(
          <React.Fragment key={url[teamIndex][1]}>
            <div className="card-container-title">{url[teamIndex][1]}</div>
            {team.map((person, personIndex) => {
              return(
                <div className="mmbr-card" key={person[0]}>
                  <div className="mmbr-pic">
                    <img loading="lazy" src={person[3]} alt={person[0]} />
                  </div>
                  <div className="mmbr-name">{person[0]}</div>
                  {url[teamIndex][1] == "Secretariat" && <div className="mmbr-position">{person[1]}</div>}
                  <div className="mmbr-sns">
                  
                    {Object.keys(snsLogo).map((site, siteIndex) => {
                      if(person[siteIndex+4] === "null") return null;
                      return(
                        <div className={`mmbr-sns-itm ${site}`} key={`${person[0]}${site}`}>
                          <a href={person[siteIndex + 4]} target="_blank" rel="noreferrer" className={site}><i className={snsLogo[site]}></i></a>
                        </div>
                      )
                    })}
                    
                  </div>

                </div>
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  </div>
  )
}

export default Team;