import React from 'react'
import { Suspense } from 'react';
import Loading from "./Loading";
import "./Update.css";

function Update() {
    return (
        <Suspense fallback={<Loading />}>
            <div className="update">
                <div className="container-fluid p-0 mt-4" style={{ overflowX: "hidden", fontFamily: "var(--font2)" }}>
                    <div className="separator">
                        <div className="line"></div>
                        <h2 style={{ fontVariant: "small-caps" }}>NITSMUN - Under 18 Edition</h2>
                        <div className="line"></div>
                    </div>
                    <div className="heading" style={{textAlign:"center",overflowX:"hidden",padding: "0 30px"}}>
                        <h2 style={{borderBottom: "2px solid black",fontVariant: "small-caps"}}>NITSMUN - Under 18 Edition</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{ textAlign: "center", overflowX: "hidden" }}>
                            <div style={{ padding: "30px" }}>
                                <p style={{fontSize: "1.1rem" }}>
                                    After hosting multiple successful conferences in both online and offline modes, NITSMUN will be conducting its first ever Model United Nations conference exclusively for school students. We at NITSMUN believe that children should be exposed to the various ways the society, nation and the world function. Only with proper grooming, experience and exposure can they make a change in the society.
                                    <br /><br />
                                    The NITSMUN - Under 18 Edition will be held from 16-17th October 2021, focusing and helping shape the young minds and prepare them for all their future endeavours.
                                    <br /><br />
                                    For more details, head over to our <a href="https://www.instagram.com/nitsmun/">@nitsmun</a> instagram page!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <hr></hr>
                </div>
            </div>

        </Suspense>
    )
}

export default Update
