import React from 'react'
import '../styles/Account.css'
import Logo from '../assets/logo.png'
import House from '../components/House'
import '../styles/House.css'

function Housing() {
  return (
    <>
    
  <div className="navbar">
    <div className="navbar__left">
      <img src={Logo} alt="Logo" className="navbar__logo" />
      <span className="navbar__name">Home</span>
    </div>
    <div className="navbar__right">
      <div className="user-menu">
        <i className="fa-solid fa-circle-user" />
        <span className="user-menu__name">Username</span>
        <div className="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
  {/* Header */}
  <header className="header-color">
    <div className="welcome">
      <div className="welcome-left">
        <h1>Hey Roomie!</h1>
        <h2>Look For Your Next Roommate Here</h2>
        <button>Search</button>
        <img src="images/present.svg" alt="present" />
      </div>
      <div className="welcome-right">
        <h1>
          Let Cribbo Pair You Up With Roommates We think You'd Like And Search
          For Places To Stay Down Below!
        </h1>
      </div>
    </div>
  </header>
  {/* Sidebar */}
  <div className="sidebar">
    <h2>Username</h2>
    <a href="#home">Account</a>
    <a href="#services">Favorites</a>
    <a href="#about">Places</a>
    <a href="#contact">Logout</a>
  </div>

  <div>
    <House />
  </div>
    </>
  )
}

export default Housing
