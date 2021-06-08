import React from 'react'


function Header(){
    
    return(
        
        <header className="main-head">
        <nav>
          <h1 id="logo"> FotoFox </h1>
          <ul className="nav-links">
            <li><a href="/#about">About</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
          <div className="burger">
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </nav>
      </header>
    );
}
export default Header;