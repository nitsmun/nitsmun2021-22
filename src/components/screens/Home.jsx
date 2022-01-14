// *Components*
import { useEffect, lazy, Suspense } from "react";
import Loading from "../Loading";
import Secretary from "../Secretary";
import Update from "../Update";

// *CSS*
import "./Home.css";

// const Timer = lazy(() => import('../Timer'));
const Article = lazy(() => import("../Article"));
const Director = lazy(() => import("../Director"));
const Carousel = lazy(() => import("../Carousel"));

const Home = (props) => {
  useEffect(() => {
    // *Setting Up Page Title*
    document.title = props.title;
  }, [props.title]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="home">
        {/*Intro Section*/}
        <div className="home-sec" id="intro">
          <img
            className="intro-bg-pic"
            src="/img/dashboard_pic2-min.jpg"
            alt="NITSMUN"
          />

          <div className="intro-logo">
            <img src="/img/logoBigWhite.svg" alt="NITSMUN" />
          </div>
        </div>
        {/*Timer Section */}
        {/* <div className="home-sec" id="apply" style={{paddingTop:"0"}}> */}
        {/* <Timer /> */}

        <div className="home-apply">
          <div
            className="container-fluid p-0 mt-4"
            style={{
              overflowX: "hidden",
              fontFamily: "var(--font2)",
            }}
          >
            <div className="separator">
              <div className="line"></div>
              <h2 style={{ fontVariant: "small-caps", fontWeight: "bold" }}>
                Workshop for NITSMUN 2022
              </h2>
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
          <br />
          <img
            style={{ height: "auto", width: "95%" }}
            src="img/workshop 10.png"
            alt="Apply Now"
          />
          <a
            href="https://forms.gle/JQXZV2jij2AeXS7t7"
            target="_blank"
            rel="noreferrer"
            className="apply-now"
          >
            Apply now!
          </a>
        </div>

        {/* </div> */}
        {/* update section */}
        <div>
          <Update />
        </div>
        {/*Director's Message Section*/}
        <div>
          <Director />
        </div>
        {/* <div className="home-sec" id="director">Director Message</div> */}
        {/*Secretary's Message Section*/}
        <div>
          <Secretary />
        </div>
        {/* Glimpse from past conference */}
        <div>
          <Carousel />
        </div>
        {/* Article & Social */}
        <div>
          <Article />
        </div>
        {/*Articles Section*/}
        {/* <div className="home-sec" id="articles"><Article/></div> */}
        {/*Social Section*/}
        {/* <div className="home-sec" id="social">Social</div> */}
      </div>
    </Suspense>
  );
};

export default Home;
