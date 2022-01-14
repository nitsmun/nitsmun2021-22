import React from "react";
import { Suspense } from "react";
import Loading from "./Loading";
import "./Update.css";

function Update() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="update mb-1">
        <div
          className="container-fluid p-0 mt-4"
          style={{ overflowX: "hidden", fontFamily: "var(--font2)" }}
        >
          <div className="row no-gutters">
            <div className="col-md-1"></div>
            <div
              className="col-md-10"
              style={{ textAlign: "center", overflowX: "hidden" }}
            >
              <div style={{ padding: "10px" }}>
                <p style={{ fontSize: "1.1rem" }}>
                  We will be conducting a workshop on 16th of January on the
                  topics:
                  <br />
                  <br />
                  &emsp;&emsp;1. Researching 101
                  <br />
                  &emsp;&emsp;2. How to delegate the workshop
                  <br />
                  <br />
                  The workshop will teach you how to research for any MUN
                  conference and help you get familiarized with the Rules of
                  Procedures that go by. You will learn how to in mind your
                  foreign policies and put your points forward in the session.
                  who's willing to dive into the world of diplomacy are welcome
                  to register for workshop.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Update;
