// *Hooks*
import { useEffect } from "react";

// *CSS*
import "./History.css";

const History = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <div>
      <h3 style={{"margin-top":"var(--navbar-height-pc)"}}>This is the history page</h3>
    </div>
  );
}

export default History;