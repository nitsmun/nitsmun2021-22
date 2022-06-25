// *Components*
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
// *CSS*
import "./Footer.css";

const Footer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div id="footer">
        {/* Footer Logo */}
        <div className="footer-logo">
          {window.innerWidth > 1000 && (
            <Link to="/">
              <img loading="lazy" src="/img/logo.svg" alt="NITMUN logo" />
            </Link>
          )}
          {window.innerWidth <= 1000 && "Contact Us"}
        </div>

        {/* MUN Location */}
        <div className="footer-itm footer-location">
          {/* Location Icon */}
          <div className="itm-icon location-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>

          {/* Address */}
          <div className="itm-text location-text">
            <span className="mun">Model United Nations</span>
            <br />
            <span className="nits">NIT, Silchar</span>
            <br />
            <span className="assam">Silchar, Assam</span>
          </div>
        </div>

        {/* MUN Call */}
        <div className="footer-itm footer-call">
          {/* Call Icon */}
          <div className="itm-icon call-icon">
            <i className="fas fa-phone-alt"></i>
          </div>

          {/* MUN Numbers */}
          <div className="itm-text call-nums">
            <span className="num1">
              <tt>9101393607</tt>
            </span>
          </div>
        </div>

        {/* Social Networking Sites (SNS) */}
        <div className="footer-sns">
          {/* Linked In */}
          <div className="sns-itm" id="sns-lin">
            <a
              className="sns-link"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/nit-silchar-model-united-nations/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* FB */}
          <div className="sns-itm" id="sns-fb">
            <a
              className="sns-link"
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/NITSMUN/?ref=br_rs"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>

          {/* Insta */}
          <div className="sns-itm" id="sns-insta">
            <a
              className="sns-link"
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/nitsmun/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Youtube */}
          <div className="sns-itm" id="sns-youtube">
            <a
              className="sns-link"
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UC1bJi0c0FcHkoIsUUJRf96A"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Gmail */}
          <div className="sns-itm" id="sns-gmail">
            <a
              className="sns-link"
              rel="noreferrer"
              target="_blank"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=team.nitsmun@gmail.com&tf=1"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Footer;
