import React from 'react'
import "./Workshops.css";

function Workshops() {
    return (
        <>
            <div className="container-fluid px-0 mb-3" style={{ overflowX: "hidden" }}>
                <div className="row no-gutters">
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{ textAlign: "center", paddingTop: "5vh", overflowX: "hidden" }}>
                        <div style={{ padding: "0 30px" }}>
                            <h3 style={{ borderBottom: "2px solid var(--theme4-100)", fontVariant: "small-caps" ,color:"var(--theme4-100)"}}>NITSMUN x THE DAIS presents Workshops
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center"
                        style={{ textAlign: "center", padding: "30px" }}>
                        <img className="img-fluid" style={{ borderRadius: "5%" }} src="/img/workshops.jpg" alt="NITSMUN" />
                    </div>
                    <div className="col-md-6 mt-lg-3 mt-0" style={{ textAlign: "center", overflowX: "hidden", alignSelf: "center" }}>
                        <p style={{ textAlign: "justify", padding: "0 30px", fontSize: "1rem" }}>
                        NITSMUN in association with The Dais present you all Workshops!<br/><br/>
                        Timings and Topics that will be covered-<br/>
                        1. 18 September, 2021 (5PM-7PM): <br/>
                        Empathy  and Critical Thinking<br/>
                        2. 19 September, 2021 (5PM-7PM): <br/>
                        Importance of SDGs (implementing them at an individual level) <br/>
                        3. 25 September, 2021 (4PM-7PM): Familiarization with MUN (general ROPs and jargons)<br/>
                        4. 26 September, 2021 (4PM-7PM): <br/>
                        A Mock MUN Session
                        </p>
                        <button
                            type="button"
                            className="custom"
                            style={{ width: "150px" }}
                        >
                            Apply now
                        </button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default Workshops
