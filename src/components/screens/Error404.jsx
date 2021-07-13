import { useEffect, Suspense } from 'react';
import Loading from "../Loading";

import "./Error404.css";

const Error404 = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="error">
        <span className="bold">! Error 404 !</span><br/>
        <span>Looking for something else?</span>
      </div>
    </Suspense>
  )
}

export default Error404;