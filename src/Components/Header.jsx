import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const path = window.location.pathname;
  return(
  <header className="header">
      <div className = "nav-section">
                <div className = "brand-and-navBtn">
                    <span className = "brand-name">
                        Skooly
                    </span>
                    <span className = "navBtn flex">
                        <i className = "fas fa-bars"></i>
                    </span>
                </div>

                <nav className = "top-nav">
                    <ul>
                        <li><Link to = "/" className = {`${path === '/'? 'active': null}`}>Home</Link></li>
                        <li><Link to = "/gallery" className = {`${path === '/gallery'? 'active': null}`} >Gallery</Link></li>
                        <li><Link to = "/blog" className = {`${path === '/blog'? 'active': null}`}>Blog</Link></li>
                        <li><Link to = "/contact" className = {`${path === '/contact'? 'active': null}`}>Contact</Link></li>
                    </ul>
                </nav>
                <span className = "search-icon">
                    <i className = "fas fa-camera"></i>
                </span>
            </div>

            <div className = "container about">
                <div className = "about-content">
                    <div className = "about-img flex">
                        <img src = "images/about-img.jpg" alt = "photographer img"/>
                    </div>
                    <h2>Film Maker Skooly Josh</h2>
                    <h3>Film Maker | Traveller | Cinematographer</h3>
                    <blockquote>
                        "To be a film maker you have to lead. YOu have to be psychotic in your desire to do something. People always like the easy route. You have to push very hard to make something unusual, something different."
                        
                    </blockquote>
                </div>

                <div className = "social-icons">
                    <ul>
                        <li>
                            <a href = "*"><i className = "fab fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href = "*"><i className = "fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href = "*"><i className = "fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href = "mailto:skooly256@gmail.com"><i className = "fab fa-google"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

  </header>
  )
}

export default Header;
