import React, { useEffect } from "react";

import "./Linktree.css";

function Linktree(props) {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  return (
    <div className="tree">
      <br />
      <br />
      <img
        src="/img/logoBigWhite.svg"
        className="img-fluid mt-2"
        alt="NITS MUN"
      />
      <br />
      <br />
      <br />
      <div className="links">
        <a
          href="https://forms.gle/JQXZV2jij2AeXS7t7"
          className="button"
          target="blank"
        >
          Link for Workshop for NITSMUN 2022
        </a>
      </div>
    </div>
  );
}

export default Linktree;
