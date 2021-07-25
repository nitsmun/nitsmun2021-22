import React from 'react'
import "./Secretary.css"

function Secretary() {
    return (
    <div className="container-fluid px-0 mt-5" style={{overflowX: "hidden"}}>
    <div className="row no-gutters">
      <div className="col-md-1"></div>
      <div className="col-md-10" style={{textAlign:"center",overflowX:"hidden",padding: "0 30px"}}>
        <h2 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>Message from the Secretary-General</h2>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row no-gutters secretary">
      <div className="col-md-1"></div>
      <div className="col-md-4 mt-lg-5 pt-lg-5 mt-0 pt-0" style={{textAlign:"center"}}>
        <div style={{padding: "0 30px"}} className="mt-lg-0 mt-sm-3 mt-3">
          <img className="img-fluid" src="img/secgen.jpg" alt="nits mun" style={{borderRadius:"50%"}}/>
          <h5 className="pt-3">Ayushi Johari</h5>
          <p style={{borderBottom: "2px solid black",fontSize:"1.1rem"}}>Secretary-General, NITS MUN</p>
        </div>
      </div>
      <div className="col-md-6" style={{textAlign:"center",overflowX:"hidden"}}>

        <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
          Greetings delegates,<br/><br/>

          On behalf of my secretariat, it is my utmost honour and pride to welcome you all to the NIT Silchar Model
          United Nations.<br/><br/>

          Since its inception in 2014, NITSMUN has grown in every aspect, ranging from the number of participants to the
          scale of our conference. From holding annual conferences, workshops, mock sessions, we have even collaborated
          with world-class universities to hold conferences for students all around the world.<br/><br/>

          NITSMUN offers a platform to shape the participants into an individual with a voice and make the leaders of
          tomorrow. I can assure, this conference will not only benefit you academically but will help you meet strong
          individuals like yourself, help you sharpen your debating, presentation, deliberative, and interpersonal
          skills along the way. Gear up to solve critical and pressing issues of today and indulge yourself in
          world-changing debates, throughout your experience.<br/><br/>

          Keeping in view the well-being of our participants, we will be holding our conferences online. For general
          assistance and business and sponsorship-related queries, you can mail our secretariat at
          team.nitsmun@gmail.com.<br/><br/>

          Wishing you the best of your luck and we look forward to welcoming you to our conference this year!<br/><br/>

          Best Regards,<br/>
          Ayushi Johari<br/>
          Secretary-General<br/>
          NIT Silchar Model United Nations

        </p>

      </div>
      <div className="col-md-1"></div>
    </div>
    <hr />
  </div>
    )
}

export default Secretary
