// *Hooks*
import React, { Suspense, useEffect } from "react";

import Loading from "../Loading";

// *CSS*
import "../Events.css";
import "../Table.css";
import "./Dais.css";
import Workshops from "../Workshops";
import Reports from "../Reports";
import JuniorWorkshop from "../JuniorWorkshop";

const GlobalVoicesMun = (props) => {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  return (
    <Suspense fallback={<Loading />}>
      <div style={{ marginTop: "var(--navbar-height-pc)", overflowX: 'hidden' }}>
        <JuniorWorkshop />
        <Workshops />
      </div>
      <div>
        <Reports />
      </div>
    </Suspense>
  );
};

export default GlobalVoicesMun;
