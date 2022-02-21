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
      <div className="links pb-5">
        <a
          href="https://forms.gle/aLXHNkNXwTVJVfq89"
          className="button"
          target="blank"
        >
          Link for Round 2 Registration for NITSMUN 2022
        </a>
      </div>
      {/* <div className="links">**No links to show**</div> */}
    </div>
  );
}

export default Linktree;
