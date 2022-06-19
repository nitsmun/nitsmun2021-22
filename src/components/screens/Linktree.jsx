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
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform"
          className="button"
          target="blank"
        >
          Link for Early Bird Registrations for NITSMUN Junior MUN 2022
        </a>
      </div>
      {/* <div className="links">**No links to show**</div> */}
    </div>
  );
}

export default Linktree;
