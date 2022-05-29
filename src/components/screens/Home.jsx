// *Components*
import { useEffect, lazy, Suspense } from "react";
import Loading from "../Loading";
import Secretary from "../Secretary";

// *CSS*
import "./Home.css";

const Timer = lazy(() => import('../Timer'));
// const Update = lazy(() => import("../Update"));
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
        <Timer />

        {/* Early Bird */}
        {/* <div className="home-apply" style={{ paddingTop: "0" }}>
          <div
            className="container-fluid p-0"
            style={{
              overflowX: "hidden",
              fontFamily: "var(--font2)",
            }}
          >
            <div className="separator">
              <div className="line"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "var(--color-8-100)",
                  height: "auto", padding: "10px",
                }}
              >
                <h2
                  style={{
                    fontVariant: "small-caps",
                    color: "var(--color-1-100)",
                    fontFamily: "var(--font2)",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}
                >
                  NITSMUN Junior MUN 2022
                </h2>
              </div>
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
          <br />
          <img
            style={{ height: "auto", width: "40%" }}
            src="img/round2.jpeg"
            alt="Apply Now"
          />
          <div style={{ width: '100%' }}>
            <div className="update mb-1">
              <div
                className="container-fluid p-0 mt-4"
                style={{ overflowX: "hidden", fontFamily: "var(--font2)" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-1"></div>
                  <div
                    className="col-md-10"
                    style={{ textAlign: "center", overflowX: "hidden" }}
                  >
                    <div style={{ padding: "10px" }}>
                      <p style={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>
                        Round 2 Applications out! Register now and be a part of NITSMUN 2022!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://forms.gle/aLXHNkNXwTVJVfq89"
            target="_blank"
            rel="noreferrer"
            className="apply-now"
          >
            Apply Now!
          </a>
        </div> */}

        {/* Mock Mun */}
        {/* <div className="home-apply" style={{ paddingTop: "0" }}>
          <div
            className="container-fluid p-0"
            style={{
              overflowX: "hidden",
              fontFamily: "var(--font2)",
            }}
          >
            <div className="separator">
              <div className="line"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "var(--color-8-100)",
                  height: "70px",
                }}
              >
                <h2
                  style={{
                    fontVariant: "small-caps",
                    color: "var(--color-1-100)",
                    fontFamily: "var(--font2)",
                    fontWeight: "bold",
                  }}
                >
                  MOCK MUN 2022
                </h2>
              </div>
              <div className="line"></div>
            </div>
            <div className="line"></div>
          </div>
          <br />
          <img
            style={{ height: "auto", width: "100%" }}
            src="img/mockmun22.png"
            alt="Apply Now"
          />
          <div>
            <Update />
          </div>
          -- Applications Closed --
        </div> */}

        {/* </div> */}
        {/* update section */}
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
