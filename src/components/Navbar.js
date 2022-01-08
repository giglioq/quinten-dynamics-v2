import React , { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";


export default function Navbar(props) {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };

  
  //pull off DOM
  // const navbarBurger = document.querySelector('#burger');
  // const navbarMenu = document.querySelector('#nav-links');

  // navbarBurger.addEventListener('click', () => {
  //   navbarBurger.classList.toggle('is-active')
  //   navbarMenu.classList.toggle('is-active')
  // }
  // )
  return (
    <nav className="navbar is-spaced is-link is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3">
          {title}
        </Link>
        <div role="button" className={isActive ? 'navbar-burger burger':'navbar-burger burger is-active'} id="burger" onClick={toggleClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div><span></span><span></span><span></span>
    
    <div className={`navbar-menu`}>
        <div className="navbar-start">
          <div className="navbar-item">a digital garden.</div>
        </div>
      </div>
      <div className={isActive ? 'navbar-menu':'navbar-menu is-active'} id="nav-links">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/projects" className="button is-primary">
              Projects
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/notes" className="button is-warning">
              Notes
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/about" className="button is-danger">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

}

