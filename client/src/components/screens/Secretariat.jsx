import "./Secretariat.css";

var snsLogo = {
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
  "sns" : [
    ["fb", "https://www.facebook.com/NITSMUN/?ref=br_rs"],
    ["insta", "https://www.instagram.com/nitsmun/"],
    ["mail", "team.nitsmun@gmail.com"],
    ["whatsapp", "https://api.whatsapp.com/send?phone=+919435537377"],
    ["github", "https://github.com/AdityaKotari/nitsmun2021-22"]
  ]
}

const Secretariat = () => {

  return (
    <div className="sctrt">
      
      <div className="card-container">
        <div className="card-container-title">Web Development Team</div>
        
        <div className="mmbr-card" id={person.name}>
          <div className="mmbr-pic">
            <img src="/img/member.jpg" alt="MEMBER_NAME" />
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