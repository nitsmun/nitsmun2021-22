import { Suspense } from "react";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";
import "./Article.css";

function Article() {
  const history = useHistory();

  const route = () => {
    let path = "/articles";
    history.push(path);
  };

  // function Expand(){
  //     let element = document.querySelector("#Expand")
  //     let btn = document.getElementById("btn1")
  //     btn.style.visibility = "hidden"
  //     element.style.display = ""
  // }

  // function Srink(){
  //     let element = document.querySelector("#Expand")
  //     let btn = document.getElementById("btn1")
  //     btn.style.visibility = "visible"
  //     element.style.display = "none"
  // }

  return (
    <Suspense fallback={<Loading />}>
      <hr />
      <section id="Article">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-1"></div>
            <div
              className="col-md-10"
              style={{
                textAlign: "center",
                paddingTop: "0px",
                overflowX: "hidden",
                color: "var(--color-8-100)",
              }}
            >
              <div style={{ padding: "30px" }}>
                <h2
                  style={{
                    borderBottom: "2px solid black",
                    fontVariant: "small-caps",
                  }}
                >
                  Check out{" "}
                  <a
                    href="https://www.instagram.com/nitsmun/"
                    style={{
                      textDecorationLine: "none",
                      color: "var(--color-6-100)",
                    }}
                  >
                    @nitsmun
                  </a>{" "}
                  for all our articles!
                </h2>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img
                  src="img/holocaust_day.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    International Holocaust Remembrance Day
                  </h5>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", fontSize: "1rem" }}
                  >
                    <br />
                    Observance of “International Day of Commemoration in memory
                    of the Victims of the Holocaust”, commemorates the six
                    million Jewish victims of the Holocaust and millions of
                    other victims of Nazism. It reaffirms the unwavering
                    commitment of UNESCO to counter antisemitism, racism, and
                    other forms of intolerance which can have a severe threat to
                    world peace.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={route}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img
                  src="img/education_day.png"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">International Day of Education</h5>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", fontSize: "1rem" }}
                  >
                    <br />
                    Education plays a vital role in fostering sustainable and
                    resilient societies and is a basic human right. 24th January
                    every year is celebrated as International Day of Education
                    to highlight the most critical changes that must be
                    nourished in order to realize everyone's fundamental right
                    to education and establish a more sustainable, inclusive,
                    and peaceful future.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={route}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img
                  src="img/braille_day.jpg"
                  alt=""
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">World Braille Day</h5>
                  <p
                    className="card-text"
                    style={{ textAlign: "justify", fontSize: "1rem" }}
                  >
                    <br />
                    Literacy is a right, which is, as much fundamental to the
                    specially-abled as it is to the abled. January 4 marks an
                    important day in the history of Human Rights. It celebrates
                    awareness of braille as a means of communication.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={route}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default Article;
