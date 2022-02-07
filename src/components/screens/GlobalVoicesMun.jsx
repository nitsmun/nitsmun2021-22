// *Hooks*
import React, { Suspense, useEffect } from "react";

import Loading from "../Loading";

// *CSS*
import "../Carousel.css";
import "../Events.css";
import "./GlobalVoicesMun.css";

let info = {
  title: "Global Voices MUN | NITSMUN",
  heading: "Global Voices MUN",

  bgpic: "/img/gvmun.jpg",

  eventDetails: [
    `NITSMUN has a strong international presence, with delegates from Singapore, Malaysia, and other nations attending the conferences. NITSMUN collaborated with The DAIS and many other MUN societies from across the country to host the 3rd conference of Global Voices MUN from November 21, 2020, to December 20, 2020, to commemorate The United Nations' 75th anniversary. The GVMUN program lasted a month and included a variety of conferences and free workshops.`,
    `The conference of NITSMUN was explicitly held on December 5, 2020, which commenced after the speech of the honourable guest, Prof Sivaji Bandyopadhyay, Director of NIT Silchar. He congratulated NITSMUN for welcoming freshers into the MUNning and debating circuits. With the intention of sensitizing the students on SDGs, the committee of simulation was decided as UNESCO and the agenda, “Achieving Inclusive and Quality Education through equitable online learning for all, keeping in view socio-economic and cultural wellness”. Mr. Devesh Gupta, the founder of Emerge India, spoke at the end of the conference, emphasising the importance of public speaking and decision-making in MUNs. This collaboration intended to enhance youth awareness of global goals and find solutions to pressing challenges such as Climate Change, Gender Equality, and Quality Education.`,
    `This was a global platform, and youth from all over the world participated. It was a successful event that brought together people from all backgrounds and perspectives to discuss and find solutions to the world's problems.`,
  ],

  images: [
    "https://lh3.googleusercontent.com/pw/AM-JKLXflQuzEDe8txXQA3loDaimzfvUb-W7dXaq-EEmMcVOgzkVNvs9IaqtEgI0Hj_9xGAOipTo5qR8_spRf_hTEMoI3UvEyA86dVnfQ9ltbgNrJ92l1TisbpOqGQBeLu4u6t0adyK2FZ4AtOow3AjBe8j0=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLW09WbSo_64kaGD5zx_uITh6yIjgz_ooqhiBdUjkGazg2UMuEy_H0dyyXc-De_IhaefPRoco36PysZBpM3SlcoQ4AuNioKEeqRxYEUynpaV4o28llH5YHLALasHAL1p14QioOpo4OyWOfLbov9Bn3bQ=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLUICYbmi_xXQQ0p9th6U04pI2X-8bkBhsJrqWV-nzofT5GjikfkHUykJjcgQlma7cHdyvLFW142eGc-jMUeq2rfSryQE-tz4y_qchzwJmu2gGvaPdf7WMLVVfp9VF6XmbVB74PUG9Jy-KQLCKX5znfd=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLWYQY6-6NlK5FLvNalYWjvVHr10qUgMLI4LbxFuM2uWWDigKrEKxOtiRGy2hF5_p2P49L0lTq4Gf2o6zMuvjW2NIoj4IuEHNHjx4sO0wVwwGrjExBUZFVI3lHwaTWZE64DiGhP8_4qz2_irZ6x50V-l=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLXtB1F6bv_WVcnGbajzPhqKIsdHgTv3uQpKnKd8H07C2kF5bv6NFgD_5D2cuTeReYpGciej2Zh7jzknvYXvYen-2VObq88MTI6g2nwOKrzeoClHrgQOueo9WoPvQxyKBkEhlU836r9WCfKq0lKg5aiO=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLWDLpdFCTls9ubfKxkroXybSxH_SwVdnERrIBPHtoUNYw1fPznLXmzFWHJ0ao9lAceJqDtGdtoUQx1NJu11eqGrEn9S-FFNgoIQ9Z9fgTSD5zJJy_Xr4n_SAmfahH3rzW1KNLPMNkkdLFfQwEPlQsz7=w640-h360-no",
    "https://lh3.googleusercontent.com/pw/AM-JKLUr2Z0fewlEZ7DuE1ablSuBXaluC289f5sH3nqhXHbwxU9sw_OPfe1e6Eqjz6xLa4txbnIQ5_8XaU13c7bYrCGLP9WCXDK2EaqLnEYQHMrauDyGTIJKW-sMd0ZMiYKqp53qH2R6RFWtmVYcC9TT0NVG=w640-h360-no",
  ],
};

const GlobalVoicesMun = () => {
  const details = info.eventDetails;

  useEffect(() => {
    // *Setting Up Page Title*
    document.title = info.title;
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="event">
        <div className="event-pic">
          <img loading="lazy" src={info.bgpic} alt="Annual Conf" />
        </div>

        <div className="event-title">
          <strong>{info.heading}</strong>
        </div>

        <div className="event-details">
          {details.map((para, index) => {
            return (
              <React.Fragment key={`para${index}`}>
                {para}
                <br />
                <br />
              </React.Fragment>
            );
          })}
        </div>

        <div className="container my-4">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
            </div>
            <div className="carousel-inner">
              {info.images.map((imageLink, index) => (
                <div className={"carousel-item " + (index === 0 && "active")}>
                  <img
                    loading="lazy"
                    src={imageLink}
                    className="d-block img-fluid"
                    alt="NITS MUN"
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default GlobalVoicesMun;
