import { useEffect } from 'react';
import {Link} from 'react-router-dom';

// *CSS*
import "./Navbar.css";

function nav() {
  let menu = document.getElementById('menu');
  let menuOpen = document.getElementById('menu-open');
  let menuClose = document.getElementById('menu-close');

  menuOpen.addEventListener('click', ()=> {
    menu.style.display = "flex";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
  });

  menuClose.addEventListener('click', ()=> {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
  });

}


const Navbar = () => {

  useEffect(()=> {
    nav();
  }, []);

  return(
    <div id="navbar">
      <div className="navbar-logo">
        {/* <img src="/img/logoSmall.png" alt="NITSMUN"/> */}
      </div>

      <div className="navbar-menu">
        <div className="menu-icon" id="menu-open">
          <i className="fas fa-bars"></i>
        </div>
        <div className="menu-icon" id="menu-close">
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div className="navbar-items" id="menu">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="#" className="navbar-link dropdown-link">
          <span className="dropdown-title">Events&nbsp;&nbsp;&nbsp;<i className="fas fa-chevron-down"></i></span>
          <div className="dropdown-menu">
            <Link to="/annual-conference" className="dropdown-itm">Annual Conference</Link>
            <Link to="/global-voices-mun" className="dropdown-itm">Global Voices MUN</Link>
            <Link to="/mock-mun" className="dropdown-itm">Mock MUNs</Link>
          </div>
        </Link>
        <Link to="/about" className="navbar-link">About Us</Link>
        <Link to="/team" className="navbar-link">Our Team</Link>
        <Link to="/articles" className="navbar-link">Articles</Link>
        <Link to="/conferences" className="navbar-link">Past Conferences</Link>
      </div>
    </div>
    
  ); 
}

export default Navbar; 