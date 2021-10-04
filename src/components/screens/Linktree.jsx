import React, { useEffect } from "react";

import "./Linktree.css";

function Linktree(props) {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="tree">
      <img
        src="/img/logoBigWhite.svg"
        className="img-fluid mt-2"
        alt="NITS MUN"
      />
      <div className="links">
        <a
          href="https://forms.gle/PAWFVNF5Tu3Chw1w9?ltclid="
          className="button"
          target="blank"
        >
          Register now for NITS Junior MUN workshops
        </a>
        <br />
        <a
          href="https://forms.gle/y9CypdKR2PBmZVrG9?ltclid="
          className="button"
          target="blank"
        >
          Link for Delegates Registration
        </a>
      </div>
    </div>
  );
}

export default Linktree;
