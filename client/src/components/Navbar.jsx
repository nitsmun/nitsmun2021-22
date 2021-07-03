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
        <img src="/img/logo.svg" alt="NITSMUN"/>
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
        <Link to="/secretariat" className="navbar-link">Secretariat</Link>
        <Link to="/history" className="navbar-link">History</Link>
        <Link to="/gallery" className="navbar-link">Gallery</Link>
        <Link to="/reachus" className="navbar-link">Reach Us</Link>
      </div>
    </div>
    
  ); 
}

export default Navbar; 
