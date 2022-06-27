import React from "react";
import "./Agenda.css";
import Mun18Gallery from "./Mun18Gallery";
// import Partners from "./Partners";
import "./Update.css";

function Agenda() {
  const bgguide = () => {
    let path =
      "https://drive.google.com/drive/folders/1tLWtvsP_MuIXdJV4au5OT_jSSHlWQAcq";
    // history.push(path);
    window.open(path, "_blank");
  };

  return (
    <>
      {/* Partner */}
      {/* <Partners /> */}
      <br />
      {/* small-screen */}
      <div
        className="small-agenda agenda py-3 px-3"
        style={{ fontFamily: "var(--font2)" }}
      >
        <h1
          className="text-center mb-4"
          style={{ fontVariant: "small-caps", color: "white" }}
        >
          Committees
        </h1>
        <div className="text-center box px-3 py-2 my-3">
          <h1 style={{ fontVariant: "small-caps" }}>
            United Nations Environment Programme
          </h1>
          <img
            width="300px"
            className="img-fluid my-2"
            src="/img/Agenda_unep.jpeg"
            alt="agenda"
          />
          <p style={{ fontSize: "0.9rem" }}>
            <strong>Agenda: </strong>
            <br />
            Addressing the problems of marine debris with special focus on the
            Pacific garbage patch
          </p>
          <button
            onClick={bgguide}
            className="custom mb-3"
            style={{ fontSize: "0.9rem" }}
          >
            Background guide
          </button>
        </div>
        <div className="text-center box px-3 py-2 my-3">
          <h1 style={{ fontVariant: "small-caps" }}>
            United Nations General Assembly
          </h1>
          <img
            width="300px"
            className="img-fluid my-2"
            src="/img/Agenda_unga.jpeg"
            alt="agenda"
          />
          <p style={{ fontSize: "0.9rem" }}>
            <strong>Agenda: </strong>
            <br />
            The possibility of fragmentation and failure of Afghan military
            institution ANDSF and Taliban's rise to power with the withdrawal of
            US troops From Afghanistan - involving targets of SDG 16
          </p>
          <button
            onClick={bgguide}
            className="custom mb-3"
            style={{ fontSize: "0.9rem" }}
          >
            Background guide
          </button>
        </div>
      </div>
      {/* large screen */}
      <div
        className="large-agenda agenda py-3 px-3"
        style={{ fontFamily: "var(--font2)" }}
      >
        <div className="px-3 py-2">
          <div className="container-fluid">
            <h1
              className="text-center mb-4"
              style={{ fontVariant: "small-caps", color: "white" }}
            >
              Committees
            </h1>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="box col-md-5 text-center">
                <div className="p-3">
                  <h3 style={{ fontVariant: "small-caps" }}>
                    United Nations High Commissioner For Refugees
                  </h3>
                  <img
                    width="300px"
                    className="img-fluid"
                    src="https://nitsmun2022-23.vercel.app/Images/Agenda1.jpeg"
                    alt="agenda"
                  />
                  <p className="mt-3" style={{ fontSize: "0.9rem" }}>
                    <strong>Agenda: </strong>
                    <br />
                    Addresing the plight of the refugees due to conflicts around
                    the globe with special emphasis on Europe.
                  </p>
                </div>
                {/* <button onClick={bgguide} className="custom mb-3">
                  Background guide
                </button> */}
              </div>
              <div className="box col-md-5 text-center">
                <div className="p-3">
                  <h3 style={{ fontVariant: "small-caps" }}>
                    United Nations Environment Programme
                  </h3>
                  <img
                    width="300px"
                    className="img-fluid"
                    src="https://nitsmun2022-23.vercel.app/Images/Agenda2.jpeg"
                    alt="agenda"
                  />
                  <p className="mt-3" style={{ fontSize: "0.9rem" }}>
                    <strong>Agenda: </strong>
                    <br />
                    Accentuating the problems caused due to rapid globalization
                    and its influence on the environment.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="box col-md-5 text-center">
                <div className="p-3">
                  <h3 style={{ fontVariant: "small-caps" }}>
                    United Nations Security Council (UNSC)
                  </h3>
                  <img
                    width="300px"
                    className="img-fluid"
                    src="https://nitsmun2022-23.vercel.app/Images/Agenda3.jpeg"
                    alt="agenda"
                  />
                  <p className="mt-3" style={{ fontSize: "0.9rem" }}>
                    <strong>Agenda: </strong>
                    <br />
                    Highlighting the problems related to weaponized nuclear
                    technology in the 21st Century.
                  </p>
                </div>
              </div>
              <div className="box col-md-5 text-center">
                <div className="p-3">
                  <h3 style={{ fontVariant: "small-caps" }}>
                    International Press Corps (IPC)
                  </h3>
                  <img
                    width="300px"
                    className="img-fluid"
                    src="https://nitsmun2022-23.vercel.app/Images/International%20Press%20Corps.png"
                    alt="agenda"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Gallery */}
      <Mun18Gallery />
      <br />
    </>
  );
}

export default Agenda;
