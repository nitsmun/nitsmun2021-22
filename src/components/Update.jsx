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
                  Mock MUN is a simulation of a model UN conference, which is
                  meant to teach the participants how to delegate exactly and
                  prepare them for the main conference.
                  <br />
                  <br />
                  The agenda for the Mock MUN session will be:
                  <br />
                  "To address the issue of global warming and finding
                  sustainable energy alternatives to reduce greenhouse effect."
                  <br />
                  <br />
                  Committee: UNEP (United Nations Environment Programme)
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
