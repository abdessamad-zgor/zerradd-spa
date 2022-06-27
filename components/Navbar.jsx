import React from 'react'

function Navbar() {
  return (
    <header id="header">
      <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/dist/index.html"><img id="logo-img" src="/dist/images/logo_zerrad.png" alt="logo" /></a>
          </div>

          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className="scroll active"><a href="#home">Home</a></li>
              <li className="scroll"><a href="#services">Services</a></li>
              <li className="scroll"><a href="#about">About</a></li>
              <li className="scroll"><a href="#our-team">Team</a></li>
              <li className="scroll"><a href="#portfolio">Gallery</a></li>
              <li className="scroll"><a href="#contact-us">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar