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

    let menuClose = document.getElementById('menu-close');

    let scrollTopList = document.getElementsByClassName('scroll-top');
    for(let i = 0; i<scrollTopList.length; i++)
      scrollTopList[i].addEventListener('click', ()=> window.scrollTo(0, 0));

    let mobNavCloseList = document.getElementsByClassName('mob-nav-close');
    for(let i = 0; i<mobNavCloseList.length; i++)
      mobNavCloseList[i].addEventListener('click', ()=> {if(window.innerWidth < 1000) menuClose.click()});
  
    let dropdownList = document.getElementsByClassName('dropdown-link');
    let dropdownCounterList = [];
    for(let i = 0; i<dropdownList.length; i++) {
      let dropdownMenu = dropdownList[i].getElementsByClassName('dropdown-menu')[0];
      dropdownCounterList[i] = true;
      dropdownMenu.style.display = "none"
      if(window.innerWidth < 1000) dropdownList[i].addEventListener('click', ()=> {
        if(dropdownCounterList[i]) dropdownMenu.style.display = "flex";
        else dropdownMenu.style.display = "none";
        dropdownCounterList[i] = !dropdownCounterList[i];
      })
    }
  }, []);

  return(
    <div id="navbar">
      <div className="navbar-logo">
        {/* <img loading="lazy" src="/img/logoSmall.png" alt="NITSMUN"/> */}
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
        <Link to="/" className="navbar-link scroll-top mob-nav-close">Home</Link>
        <span className="navbar-link dropdown-link">
          <span className="dropdown-title">Events&emsp;<span className="bold"><i className="fas fa-chevron-down"></i></span></span>
          <div className="dropdown-menu">
            <Link to="/annual-conference" className="dropdown-itm scroll-top mob-nav-close">Annual Conference</Link>
            <Link to="/global-voices-mun" className="dropdown-itm scroll-top mob-nav-close">Global Voices MUN</Link>
            <Link to="/mock-mun" className="dropdown-itm scroll-top mob-nav-close">Mock MUNs</Link>
          </div>
        </span>
        <Link to="/about" className="navbar-link scroll-top mob-nav-close">About Us</Link>
        <Link to="/team" className="navbar-link scroll-top mob-nav-close">Our Team</Link>
        <Link to="/articles" className="navbar-link scroll-top mob-nav-close">Articles</Link>
        <Link to="/history" className="navbar-link scroll-top mob-nav-close">Past Conferences</Link>
      </div>
    </div>
    
  ); 
}

export default Navbar; 