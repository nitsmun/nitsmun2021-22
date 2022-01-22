import { useEffect, Suspense } from "react";
import "./About.css";

import Loading from "../Loading";

function About(props) {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="container-fluid p-0"
        style={{
          overflowX: "hidden",
          fontFamily: "var(--font2)",
          color: "var(--color-8-100)",
        }}
      >
        <div
          id="intro"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "var(--color-8-080)",
            height: "70px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontVariant: "small-caps",
              fontWeight: "bold",
              fontFamily: "var(--font2)",
            }}
          >
            About Us
          </h1>
        </div>
        <div className="row no-gutters">
          <div className="col-md-1"></div>
          <div
            className="col-md-10"
            style={{
              textAlign: "center",
              paddingTop: "3vh",
              overflowX: "hidden",
            }}
          >
            <p
              style={{
                textAlign: "justify",
                padding: "30px",
                fontSize: "1rem",
              }}
            >
              NITSMUN was founded in 2014 when a group of like-minded people
              wanted to create a society for younger people to discuss, debate,
              and deliberate present-day crises whilst experiencing themselves
              being in the shoes of various world leaders. Ever since the first
              MUN session in 2014, our society has grown manifold with more
              enthusiastic people joining in and helping us emerge as one the
              best and most promising MUN societies in NE India. Our conference
              offers its delegates an unrivaled Model UN experience by running
              highly personalized, engaging, and dynamic committees.
              <br />
              <br />
              Besides having participated in various MUNs in and around the
              country and bringing home numerous accolades and valuable
              experience, we have also hosted MUNs every single year since, with
              multiple mock sessions and collaborative conferences with
              world-class universities, with awe-inspiring members of the EB
              training and guiding us to think rationally, act quickly and solve
              modern-day problems and at the same time also provide us with the
              support required. NITSMUN aims at polishing the interpersonal,
              debating, and deliberating skills of the participants and mold
              them into a leader of tomorrow.
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div
          className="row no-gutters smallscreen"
          style={{
            backgroundColor: "var(--color-7-100)",
          }}
        >
          {/* //TODO: Change this heading to something like the director's */}
          <h2
            style={{
              fontVariant: "small-caps",
              textAlign: "center",
              paddingTop: "20px",
              fontWeight: "bold",
            }}
          >
            Message from the Secretary-General
          </h2>
          <div className="col-md-1"></div>
          <div
            className="col-md-2 d-flex justify-content-center align-items-center"
            style={{ textAlign: "center" }}
          >
            <img
              loading="lazy"
              className="img-fluid aos-init"
              src="img/secgen.jpg"
              alt="nits mun"
              style={{ width: "80%", borderRadius: "5%" }}
            />
          </div>
          <div
            className="col-md-3"
            style={{ textAlign: "center", overflowX: "hidden" }}
          >
            <p
              style={{
                textAlign: "justify",
                padding: "30px",
                fontSize: "1.1rem",
              }}
            >
              Greetings delegates,
              <br /> <br />
              On behalf of my secretariat, it is my utmost honour and pride to
              welcome you all to the NIT Silchar Model United Nations.
              <br /> <br />
              Since its inception in 2014, NITSMUN has grown in every aspect,
              ranging from the number of participants to the scale of our
              conference. From holding annual conferences, workshops, mock
              sessions, we have even collaborated with world-class universities
              to hold conferences for students all around the world.
              <br /> <br />
              NITSMUN offers a platform to shape the participants into an
              individual with a voice and make the leaders of tomorrow. I can
              assure, this conference will not only benefit you academically but
              will help you meet strong individuals like yourself, help you
              sharpen your debating, presentation, deliberative, and
              interpersonal skills along the way. Gear up to solve critical and
              pressing issues of today and indulge yourself in world-changing
              debates, throughout your experience.
              <br /> <br />
              Keeping in view the well-being of our participants, we will be
              holding our conferences online. For general assistance and
              business and sponsorship-related queries, you can mail our
              secretariat at team.nitsmun@gmail.com. 
              <br /> <br />
              Wishing you the best of your luck and we look forward to welcoming
              you to our conference this year!
              <br />
              <br />
              Best Regards,
              <br />
              Ayushi Johari
              <br />
              Secretary-General
              <br />
              NIT Silchar Model United Nations
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div
          className="row no-gutters largescreen"
          style={{ backgroundColor: "var(--color-7-100)" }}
        >
          <div className="col-md-1"></div>
          <div
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{ textAlign: "center", minHeight: "100vh" }}
          >
            <img
              loading="lazy"
              className="img-fluid aos-init aos-animate"
              src="img/secgen.jpg"
              alt="nits mun logo"
              style={{ borderRadius: "5%" }}
            />
          </div>
          <div
            className="col-md-6"
            style={{
              textAlign: "justify",
              paddingTop: "5vh",
              overflowX: "hidden",
            }}
          >
            <h2
              style={{
                paddingLeft: "30px",
                fontVariant: "small-caps",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Message from the Secretary-General
            </h2>

            <p
              style={{
                textAlign: "justify",
                padding: "30px",
                fontSize: "1rem",
                color: "white",
              }}
            >
              Greetings delegates,
              <br /> <br />
              On behalf of my secretariat, it is my utmost honour and pride to
              welcome you all to the NIT Silchar Model United Nations.
              <br /> <br />
              Since its inception in 2014, NITSMUN has grown in every aspect,
              ranging from the number of participants to the scale of our
              conference. From holding annual conferences, workshops, mock
              sessions, we have even collaborated with world-class universities
              to hold conferences for students all around the world.
              <br /> <br />
              NITSMUN offers a platform to shape the participants into an
              individual with a voice and make the leaders of tomorrow. I can
              assure, this conference will not only benefit you academically but
              will help you meet strong individuals like yourself, help you
              sharpen your debating, presentation, deliberative, and
              interpersonal skills along the way. Gear up to solve critical and
              pressing issues of today and indulge yourself in world-changing
              debates, throughout your experience.
              <br /> <br />
              Keeping in view the well-being of our participants, we will be
              holding our conferences online. For general assistance and
              business and sponsorship-related queries, you can mail our
              secretariat at team.nitsmun@gmail.com. 
              <br /> <br />
              Wishing you the best of your luck and we look forward to welcoming
              you to our conference this year!
              <br />
              <br />
              Best Regards,
              <br />
              Ayushi Johari
              <br />
              Secretary-General
              <br />
              NIT Silchar Model United Nations
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-1"></div>
          <div
            className="col-md-10"
            style={{ textAlign: "center", overflowX: "hidden" }}
          >
            <div style={{ padding: "30px" }}>
              <h2
                style={{
                  borderBottom: "2px solid black",
                  fontVariant: "small-caps",
                  fontWeight: "bold",
                }}
              >
                Our Vision
              </h2>
              <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
                NITSMUN aspires to involve youth in international dialogue,
                deliberate upon the dire issues of the world and shape them into
                strong individuals who'll become the leaders of tomorrow
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-1"></div>
          <div
            className="col-md-10"
            style={{
              textAlign: "center",
              paddingTop: "0px",
              overflowX: "hidden",
            }}
          >
            <div style={{ padding: "30px" }}>
              <h2
                style={{
                  borderBottom: "2px solid black",
                  fontVariant: "small-caps",
                  fontWeight: "bold",
                }}
              >
                What is a Model UN?
              </h2>
              <p style={{ textAlign: "justify", fontSize: "1rem" }}>
                A Model United Nations is an academic simulation of the United
                Nations. Students act as delegates and discuss real-world
                problems. These simulations are conducted by various
                universities, colleges, and schools to elevate the debating,
                presentation, oratory, deliberative skills of students and
                acquaint them with the pressing ongoing problems in the world
                and give them an opportunity to brainstorm and try finding
                solutions to them, whilst keeping in mind their foreign
                policies. Every conference has different committees and each
                committee discourses upon a certain agenda and tries to find
                fixes and solutions to the problems.
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </Suspense>
  );
}

export default About;
