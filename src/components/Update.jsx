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
                        <h2 style={{ fontVariant: "small-caps",fontWeight:"bold" }}>NITS Junior MUN</h2>
                        <div className="line"></div>
                    </div>
                    <div className="heading" style={{ textAlign: "center", overflowX: "hidden", padding: "0 30px" }}>
                        <h2 style={{ borderBottom: "2px solid black", fontVariant: "small-caps",fontWeight:"bold" }}>NITS Junior MUN</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{ textAlign: "center", overflowX: "hidden" }}>
                            <div style={{ padding: "30px" }}>
                                <p style={{ fontSize: "1.1rem" }}>
                                    With great pride and honour, we announce the first edition of NITS Junior MUN exclusively for school students. We believe that children and young teens should be exposed to the various intricacies of society and nations and should understand how the world functions from the grassroot level along with the challenges faced. It is only with proper grooming, experience and exposure that enables them to make changes in the society. Through this conference, we are targeting students from grade VI to grade XII from schools all across the country.<br/><br/>

                                    A day-long free-of-cost workshop will be held a few days before the conference in order to acclimatise those without prior experience. Keeping in mind the various examination schedules of the Central and State Boards, we have planned to organise our conference from October 16, 2021 to October 17, 2021. The cost of participation for the MUN conference has been set at ₹150 for individuals, with a special discounted offer of ₹125 per individual for group registrations. (discount only applicable to groups with 5 or more participants)
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
