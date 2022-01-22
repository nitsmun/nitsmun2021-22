import React from 'react';

function JuniorWorkshop() {
    return <div className='row'>
        <div className="col-md-1"></div>
        <div
            className='col-md-10'
            style={{
                textAlign: 'center',
                paddingTop: '5vh',
                overflowX: 'hidden',
                fontFamily: 'var(--font2)'
            }}>
            <div style={{ padding: '0 30px' }}>
                <h3
                    style={{
                        borderBottom: '2px solid var(--theme4-100)',
                        fontVariant: 'small-caps',
                        color: 'var(--theme4-100)',
                        fontWeight: 'bold'
                    }}>
                    Workshop for NITSMUN 2022
                </h3>
            </div>
        </div>
        <div className="col-md-1"></div>
        <img
            style={{ height: "auto", width: "100%" }}
            src="../img/workshop 10.png"
            alt="Apply Now"
        />
        <div className="reports" style={{ fontFamily: "var(--font2)" }}>
            <div className="tab-container">
                <div className="tab-content-container">
                    <div className="tab-content" style={{ display: 'block' }}
                    >
                        We will be conducting a workshop on 16th of January on the topics:
                        <br /><br />
                        1. Researching 101<br />
                        2. How to delegate the workshop
                        <br /><br />
                        The workshop will teach you how to research for any MUN conference and help you get familiarized with the Rules of Procedures that go by. You will learn how to in mind your foreign policies and put your points forward in the session. Who's willing to dive into the world of diplomacy are welcome to register for workshop.
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default JuniorWorkshop;
