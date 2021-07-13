import { useEffect, useState, Suspense } from 'react';
import { readString } from 'react-papaparse';
import Loading from "../Loading";
import "./Team.css";

var snsLogo = {
  "lin" : "fab fa-linkedin-in",
  "fb" : "fab fa-facebook-f",
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
  
  var snsKeyCounter = 1;
  var personKeyCounter = 1;

  return (
  <Suspense fallback={<Loading/>}>
    <div className="team">
      <div className="card-container">
        <div className="card-container-title">Team</div>
        
        {data && data.map(person => {
        return(
        <div className="mmbr-card" id={person['Name']} key={personKeyCounter++ && personKeyCounter}>
          <div className="mmbr-pic">
            <img loading="lazy" src={person.pic} alt={person['Name']} />
          </div>

          <div className="mmbr-name">{person.Name}</div>
          <div className="mmbr-position">{person.Post}</div>
          <div className="mmbr-batch">{person.Batch}</div>

          {/* SNS Item Links */}
          <div className="mmbr-sns">
            {Object.keys(snsLogo).map(site => {
              if(person[site] === "") return null;
              return(
                <div className={`mmbr-sns-itm ${site}`} key={snsKeyCounter++ && snsKeyCounter}>
                  <a href={person[site]} target="_blank" rel="noreferrer" className={site}><i className={snsLogo[site]}></i></a>
                </div>
              )
            })}
          </div>

        </div>)})}

      </div>
    </div>
  </Suspense>
  )
}

export default Secretariat;