// *Components*
import {Link} from 'react-router-dom';

// *CSS*
import "./Footer.css";

const Footer = () => {

  return (
    <div id="footer">

      {/* Footer Logo */}
      <div className="footer-logo">
        {/* <Link to="/"><img loading="lazy" src="./img/text_logo_white.png" alt="NITMUN logo"/></Link> */}
      </div>
      
      {/* MUN Location */}
      <div className="footer-itm footer-location">
        
        {/* Location Icon */}
        <div className="itm-icon location-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>

        {/* Address */}
        <div className="itm-text location-text">
          <span className="mun">Model United Nations</span><br/>
          <span className="nits">NIT, Silchar</span><br/>
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
          <span className="num1">+91 94355 37377</span><br/>
          <span className="num2">+91 70028 87692</span>
        </div>
      </div>

      {/* Social Networking Sites (SNS) */}
      <div className="footer-sns">

        {/* FB */}
        <div className="sns-itm" id="sns-fb">
          <a className="sns-link" rel="noreferrer" target="_blank" href="https://www.facebook.com/NITSMUN/?ref=br_rs"><i className="fab fa-facebook-f"></i></a>
        </div>

        {/* Insta */}
        <div className="sns-itm" id="sns-insta">
          <a className="sns-link" rel="noreferrer" target="_blank" href="https://www.instagram.com/nitsmun/"><i className="fab fa-instagram"></i></a>
        </div>

        {/* Gmail */}
        <div className="sns-itm" id="sns-gmail">
          <a className="sns-link" rel="noreferrer" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=team.nitsmun@gmail.com&tf=1"><i className="far fa-envelope"></i></a>
        </div>
      </div>

    </div>
  )
}

export default Footer;