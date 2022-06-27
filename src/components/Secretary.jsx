import React from "react";
import "./Secretary.css";

function Secretary() {
  return (
    <div
      className="container-fluid px-0 mt-5"
      style={{ overflowX: "hidden", color: "var(--color-8-100)" }}
    >
      <div className="row no-gutters">
        <div className="col-md-1"></div>
        <div
          className="col-md-10"
          style={{
            textAlign: "center",
            overflowX: "hidden",
            padding: "0 30px",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid black",
              fontVariant: "small-caps",
              fontFamily: "var(--font2)",
              fontWeight: "bold",
              color: "var(--color-8-100)",
            }}
          >
            Message from the Secretary-General
          </h2>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row no-gutters secretary">
        <div className="col-md-1"></div>
        <div
          className="col-md-4 mt-lg-5 pt-lg-5 mt-0 pt-0"
          style={{ textAlign: "center" }}
        >
          <div style={{ padding: "0 30px" }} className="mt-lg-0 mt-sm-3 mt-3">
            <img
              className="img-fluid"
              src="https://nitsmun2022-23.vercel.app/Images/shreyashiRoymedhi.jpeg"
              alt="nits mun"
              style={{ borderRadius: "50%" }}
            />
            <h5 className="pt-3">Shreyashi Roymedhi</h5>
            <p
              style={{
                borderBottom: "2px solid var(--color-8-100)",
                fontSize: "1.1rem",
                display: "inline",
              }}
            >
              Secretary-General, NITS MUN
            </p>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{ textAlign: "center", overflowX: "hidden" }}
        >
          <p
            style={{
              textAlign: "justify",
              padding: "30px",
              fontSize: "1.1rem",
            }}
          >
            Dear delegates, On behalf of my secretariat, with utmost honour and
            pride, I welcome you all to the annual NIT Silchar Junior Model
            United Nations conference to be held on 6th and 7th August, 2022.
            <br />
            <br />
            The success of its maiden edition presented us with a challenge to
            make the second edition even better and bigger. NITS Junior MUN is
            new venture mainly focused on spreading a culture of healthy and
            constructive debate among school students and making them aware of
            world security, economics and politics by acting like delegates from
            different countries.
            <br />
            <br />
            Due to the relentless efforts of the team every passing year paired
            with the enthusiastic participants and stellar executive board
            members, NITSMUN has been able to carve its own place in the MUN
            circuit and now stands out as one of the forerunners amongst the NE
            India MUNs. Through the simulation of the annual conferences and
            year-round activity for the MUN enthusiasts, NITSMUN continues to
            uphold its passion and dedication to engage the youth in MUN culture
            and bring out the best in them.
            <br />
            <br />
            This will be a golden opportunity to expand your knowledge and
            utilize it in engaging debates and simultaneously build your
            critical thinking as well as writing skills. You will be able to
            connect with talented people and learn immensely throughout the
            process, all from the comfort of your home. To achieve the same you
            need to do extensive research beforehand and our team has put in
            every effort to make your research experience smoother and
            hassle-free by making this background guide as comprehensive as we
            can. From ROPs to references, the background guide has it all. We
            look forward to welcoming you and hope you will have an enriching
            experience!
            <br />
            <br />
            Best Regards,
            <br />
            Shreyashi Roymedhi
            <br />
            Secretary-General
            <br />
            NIT Silchar Model United Nations
          </p>
        </div>
        <div className="col-md-1"></div>
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Secretary;
