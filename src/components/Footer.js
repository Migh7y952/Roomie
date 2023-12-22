import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/logo.png';
import "../styles/Footer.css";

function Footer() {
    return (
      <div>
        <div className="footer__container">
          <div className="footer__links">
              <div className="footer__link--items">
                <h2>How We Can Help</h2>
                <a href="/sign__up">Contact us Anytime</a>
              </div>
              <div className="footer__link--items">
                <h2>Call us</h2>
                <a href="/">number</a>
              </div>
              <div className="footer__link--items">
                <h2>Send us a message</h2>
                <a href="/">roomiehq@gmail.com</a>
              </div>
              <div className="footer__link--items">
                <a
                  className="social__icon--link"
                  href="//www.instagram.com/roomiehq/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                > <InstagramIcon />
                  <i className="fab fa-instagram" /> Instagram
                </a>
                <a
                  className="social__icon--link"
                  href="//www.tiktok.com/@roomiehq"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Tiktok"
                > 
                  <i className="fab fa-tiktok" /> Tiktok
                </a>
                <a
                  className="social__icon--link"
                  href="//www.twitter.com/RoomieHQ"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-x-twitter" /> Twitter
                </a>
              </div>
          </div>
          <section className="social__media">
            <div className="social__media--wrap">
              <div className="footer__logo">
                <a href="/" id="footer__logo">
                  <img src={Logo}></img>
                </a>
              </div>
              <p className="website__rights">© RHQ 2023. All rights reserved</p>
              <div className="social__icons"></div>
            </div>
          </section>
        </div>
  
      </div>
    )
}
  
export default Footer