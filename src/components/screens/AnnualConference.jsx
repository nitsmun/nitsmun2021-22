// *Hooks*
import { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

// *CSS*
import "./AnnualConference.css";

const AnnualConference = (props) => {
  
  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = props.title;
  
  }, [props.title]);
  
  return (
    <Suspense fallback={<Loading/>}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src="/img/annualConf.jpeg" alt="Annual Conf" />
        </div>

        <div className="event-title">TITLE</div>
        <div className="event-date">DATE</div>

        <div className="event-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut non, exercitationem animi similique quibusdam veniam quasi reprehenderit distinctio fugiat? Voluptate, sapiente exercitationem non alias sequi iure modi facere delectus quisquam tempore ipsam quia quos sit assumenda ratione nisi molestiae in numquam voluptatum expedita nulla ut eum tempora reiciendis. Consequuntur vitae eaque, deserunt dignissimos pariatur rerum iusto accusamus repellendus error exercitationem, placeat magni laboriosam corrupti ipsum? Provident, modi sed deleniti eveniet possimus nihil aut maxime nostrum pariatur vero recusandae, labore molestias tempora quaerat ipsam ad laboriosam eligendi. Asperiores quasi doloribus quia, deleniti vitae recusandae autem neque, laudantium minus temporibus culpa placeat ipsam ad consequuntur. Numquam unde placeat assumenda a quasi optio modi tempora maiores sapiente quis illo repellat ipsum, non hic suscipit illum expedita quisquam quae veritatis nisi explicabo esse libero officia nihil. Harum aut veniam animi quaerat deserunt illo impedit delectus ullam esse, sequi placeat minus, dolorem nam autem sapiente?</div>

        <Link className="event-apply-btn" to="/apply">Apply Now</Link>

        <div className="event-exec-board">
          <h3 className="event-exec-board-title">Executive Board :</h3>
          <img loading="lazy" src="/img/judge2021_1.jpg" alt="Judge 1" />
          <img loading="lazy" src="/img/judge2021_2.jpg" alt="Judge 2" />
          <img loading="lazy" src="/img/judge2021_3.jpg" alt="Judge 3" />
        </div>
      </div>
    </Suspense>
  );
}

export default AnnualConference;