import { useState } from "react";

import "./Reports.css";
import WorkshopsGallery from "./WorkshopsGallery";

const tabData = {
  names: ["DAY 1", "DAY 2", "DAY 3", "DAY 4"],
  content: [
    <>
      The three day long workshop organised under the module of NITS Junior MUN
      in collaboration with The Dias, started on the 18th of September, 2021 and
      was conducted on Cisco Webex online platform. The first day of the
      workshop commenced at 5pm with the Director of National Institute of
      Technology, Silchar, Professor Shivaji Bandhopadhyay illustrating the
      objective behind its conduction. He went on to emphasise on how MUN
      conferences can be a great tool for the holistic development of school
      students. Further, Dr. Wasim Arif, Associate Dean of Student Welfare, NIT
      Silchar, who also happens to be the Faculty Advisor of NITSMUN focused on
      the objective behind the team’s new venture to conduct a national level
      conference for the school students across the country.
      <br />
      <br />
      After the brief introduction ceremony of the guest speakers, Tripti
      Choudhary Vaid(Guest Speaker), Jasmine Susan Jose, Sakshi Gupta and Yuvraj
      Rallapalli took over the proceedings of the workshop on behalf of the
      Dias. The topic for the session was “
      <span className="bold">Empathy and Critical Thinking</span>” and each of
      the speakers took their turn to emphasize on the psychological impact and
      importance of empathy and critical thinking in today’s world.The session
      was kept quite interesting by presentation of slides. Some of the topics
      covered in the session were how critical thinking and overanalyzing can be
      differentiated, the role of empathy in critical thinking among many
      others.
      <br />
      <br />
      The audience dropped in questions and doubts in the chat box throughout
      the session. The one and a half hour long Day 1 of the workshop ended with
      a short QnA session followed by a vote of thanks to The DIAS by members of
      the NITSMUN society.
    </>,
    <>
      The second day of the three-day-long workshop, organized under the module
      of NITS Junior MUN by NITSMUN which was in collaboration with The Dais,
      commenced on <span className="bold">19th September 2021</span> at 5:00 PM
      and was conducted on Cisco Webex online platform.
      <br />
      <br />
      After the brief introduction of the facilitators of this workshop, namely
      Muskan Ajitsaria, Avhirup Kumar Ghosh and Vaishnavi Suresh, the
      proceedings of the workshop were taken over by the aforementioned on
      behalf of the Dias.
      <br />
      <br />
      The topic of the session was “
      <span className="bold">Importance of SDGs for Youth</span>”. The key
      objectives of the workshop were -
      <br />
      <br />
      <ol>
        <li>To build understanding with participants on what SDGs are</li>
        <li>Reflect on how they related to SDGs as youth and individuals.</li>
        <li>
          Develop ideas of how youth can work towards the achievement of SDGs,
          which was achieved with an in-depth discussion among the guest
          speakers.
        </li>
      </ol>
      <br />
      Each speaker took their turn to explain the topics for the session. Ms
      Vaishnavi Suresh made the students aware of sustainable development, the
      history of SDGs, the difference between sustainable development and
      sustainability and the “Global indicator framework”. Followed by which, Mr
      Avhirup covered the topic about “India and SDGs” and “SDG stakeholders”.
      This was followed by Ms Muskan covering the topics of critical thinking
      and the different steps that can be taken to contribute towards various
      SDGs.
      <br />
      <br />
      The session was made quite interesting with the presentation of slides
      along with regular interaction with the participants, with the students
      being allowed to drop their queries and responses in the chatbox all
      throughout the session. Day 2 of the workshop ended with a short Q&A
      session followed by a vote of thanks to The DIAS, by members of the
      NITSMUN society.
    </>,
    <>
      The third day of the workshop organized under the module of NITS JUNIOR
      MUN by NITSMUN, in collaboration with The Dais commenced on 25th September
      2021 at 5:00 PM and was conducted on Cisco Webex online platform.
      <br />
      <br />
      The session was conducted by Mr. Devesh Gupta along with his team of
      co-facilitators Vaishnavi Suresh, Dhwani Shah and Sahej.
      <br />
      <br />
      The main agenda of the session was to introduce the students to the
      concept behind the working of MUN conferences. The session began with a
      series of mind crunching basic questions that successfully managed to
      confuse all people ranging from school students to senior students and
      facilitators. Mr. Devesh made the lecture completely interactive and made
      sure that the spectators actively participated in the discussion
      consisting of practical day to day life examples. The co-facilitators then
      one by one explained about the different bodies under the United Nations
      namely the General Assembly, the Security Council, the Economic and Social
      Council, the Trusteeship Council, the International Court of Justice, and
      the UN Secretariat, and enlightened the audience about the general facts
      about the United Nations.
      <br />
      <br />
      The final part of the evening comprised of a discussion on the Rules of
      Procedure, motions, etc followed in a conference session and other points
      and rights to be followed, in detail. The session ended with a brief
      lecture on how to work on Working Papers and eventually write the Draft
      Resolution. The meeting was very informative and engrossing, which helped
      to create the foundational knowledge about MUNs. This helped the
      participants to develop a clear understanding regarding the functioning of
      a session which helped them in{" "}
      <span className="bold">NIT Silchar Mock Junior MUN </span> organised the
      next day. <br />
      <br />
    </>,
    <>
      On <span className="bold">26th September 2021</span>, a mock MUN session
      was organized under the module of NITS JUNIOR MUN by NITSMUN. It commenced
      at 4:00 PM and was conducted on Zoom online platform.
      <br />
      <br />
      The MOCK MUN Conference was organised for the participants to familiarize
      them with the proceedings of Model UN conferences. The facilitators of Day
      4 were: Shreyashi Roymedhi, Sunil Kumar Mulkala, Sai Lahari Jayareddygari,
      Mondeep Prakash and Sanchayita Purkayastha with the moderators: Mehul
      Dewangan and Rahul Chourasia.
      <br />
      <br />
      The workshop started with the facilitators making the participants (The
      Delegates) understand the ROPs, GSL, motions, points, chits, caucuses and
      paperwork of the conference. Then the conference was commenced by the
      Chair and the motions were put on the floor by the participants. The topic
      of the conference was: "Psychological Impact of COVID-19 on students". The
      GSL started and then the motions for moderated caucuses were put on the
      floor. The facilitators and the chair cleared all the doubts of the
      participants regarding the proceedings.
      <br />
      <br />
      Facilitator (Sanchayita Purayastha) explained about the moderated and
      unmoderated caucuses. Respected chairperson(Mehul Devangan) initiated
      discussion about the paperwork, the format and passing of the draft
      resolution.This was followed by a doubt session. Facilitators Mondeep
      Prakash and Shreyashi Roymedhi added some more insights about the
      functioning of MUNs.
      <br />
      <br />
      The closing remarks were given by the Secretary General of NITSMUN. The
      session was thereafter adjourned.
    </>,
  ],
};

const Reports = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="reports" style={{ fontFamily: "var(--font2)" }}>
      {/* <div className="heading" style={{fontVariant:'small-caps',fontWeight:'bold'}}>Reports</div> */}
      <div className="tab-container">
        <div className="tab-names">
          {tabData.names.map((name, index) => (
            <div
              key={index}
              className={"name" + (index === tabIndex ? " active-name" : "")}
              onClick={() => setTabIndex(index)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="tab-content-container">
          {tabData.content.map((report, index) => (
            <div
              key={index}
              className={
                "tab-content" + (index === tabIndex ? " active-content" : "")
              }
            >
              {report}
            </div>
          ))}
        </div>
        <WorkshopsGallery index={tabIndex} />
      </div>
    </div>
  );
};

export default Reports;
