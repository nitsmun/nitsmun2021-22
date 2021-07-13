import { useEffect } from 'react';

import "./Error404.css";

const Error404 = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);

  return (
    <div className="error">
      <span className="bold">! Error 404 !</span><br/>
      <span>Looking for something else?</span>
    </div>
  )
}

export default Error404;