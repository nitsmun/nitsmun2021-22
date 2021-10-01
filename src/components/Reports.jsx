import { useState } from "react";

import "./Reports.css";
import WorkshopsGallery from "./WorkshopsGallery";

const tabData = {
  names: ["Day 1", "Day 2"],
  content: [
    <>
      The three day long workshop organised under the module of NITS Junior MUN
      in collaboration with The Dias started on the 18th of September,2021 and
      was conducted on Cisco Webex online platform. The first day of the
      workshop commenced at 5pm with the director of National Institute of
      Technology, Silchar, Dr. Shivaji Bandopadhyay illustrating the objective
      behind its conduction. He went on to emphasise on how MUN conferences can
      be a great tool for the holistic development of school students, who are
      the primary targets of the NITS Junior MUN. Further, Dr. Wasim Arif,
      Associate Dean of student Welfare, NIT Silchar, who also happens to be the
      Faculty Advisor of NITSMUN focused on the objective behind the body’s new
      venture to conduct a national level conference for the school students
      across the country.
      <br />
      <br />
      After the brief introduction ceremony of the guest speakers, Tripti
      Choudhary Vaid, Jasmine Susan Jose, Sakshi Gupta and Yuvraj Rallapalli,
      they took over the proceedings of the workshop on behalf of the Dias. The
      topic for the session was “
      <span className="bold">Empathy and Critical Thinking</span>” and each of
      the speakers took their turn to emphasize on the psychological impact and
      importance of empathy and critical thinking in today’s world.The session
      was kept quite interesting by presentation of slides. Some of the topics
      covered in the session were how critical thinking and overanalyzing can be
      differentiated, the role of empathy in critical thinking among many
      others.
      <br />
      <br />
      The session was kept quite interactive by allowing the audience to drop in
      questions and doubts in the chat box throughout the entire session. The
      one and a half hour long Day1 of the workshop ended with a short QnA
      session followed by a vote of thanks to The DIAS by members of the NITSMUN
      society.
    </>,
    <>
      The second day of the three-day-long workshop organized under the module
      of NITS JUNIOR MUN by NITSMUN in collaboration with The Dais commenced on
      19th September 2021 at 5:00 PM and was conducted on Cisco Webex online
      platform.
      <br />
      <br />
      After the brief introduction of the facilitators of this workshop - Muskan
      Ajitsaria, Avhirup Kumar Ghosh and Vaishnavi Suresh, the proceeding of the
      workshop was taken over by them on behalf of The Dias.
      <br />
      <br />
      The topic of the session was “
      <span className="bold">Workshop On SDGs and Youth</span>”. The key
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
      history of SDGs, the difference between sustainable development snd
      sustainability and the “Global indicator framework”. Then, Mr Avhirup
      covered the topic about India and SDGs and about the SDG stakeholders.
      This was followed by Ms Muskan covering the topics of Critical thinking
      and the different steps youths can take to contribute towards various
      SDGs.
      <br />
      <br />
      The session was kept quite interesting with the presentation of slides and
      interactive as the students were allowed to drop their queries and their
      responses in the chatbox all throughout the session. Day 2 of the workshop
      ended with a short QnA session followed by a vote of thanks to The DIAS by
      members of the NITSMUN society.
    </>,
  ],
};

const Reports = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="reports" style={{fontFamily:"var(--font2)"}}>
      <div className="heading" style={{fontVariant:'small-caps',fontWeight:'bold'}}>Reports</div>
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
        <WorkshopsGallery index={tabIndex}/>
      </div>
    </div>
  );
};

export default Reports;
