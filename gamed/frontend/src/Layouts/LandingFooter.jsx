import React from "react";
import location from "../assets/images/locationIcon.svg";
import telephone from "../assets/images/telephoneIcon.svg";
import email from "../assets/images/emailIcon.svg";
import logoFooter from "../assets/images/WhiteLogo.svg";
import fbLogo from "../assets/images/faecbookLogo.svg";
import ig from "../assets/images/instagramLogo.svg";
import twitter from "../assets/images/twitterFooterLogo.png";
import "../Styles/LandingFooterStyles.css";
import { Link } from "react-router-dom";

function LandingFooter() {
  return (
    <React.Fragment>
      <section className="snap-section" >
        <header id="landing-footer-header">
          What Other Players are Saying
        </header>

        <div id='footer-comment-card-container'>
          <article id="footer-comment-card">
            <img src={{}} alt="Commenter's profile"></img>
            <header id="footer-comment-card-title">Lorem Ipsum</header>
            <p id="footer-comment-card-content">Lorem ipsum dolor sit amet, quod eirmod tritani at has, ipsum maluisset usu an. At vel noster mediocritatem. Eam id aliquip quaestio petentium, paulo libris ius ne, cu offendit adversarium cum.</p>
          </article>
        </div>
      </section>

      <section className="snap-section">
        <div id="footer-cta">
          <h2>Learn a skill on Gamed today, come join the fun!</h2>
          <Link to={'/create-account'}><button>JOIN US TODAY</button></Link>
        </div>

        <div id="footer-background">
          <div id="footer-contacts">
            <div id="footer-contacts-location">
              <img src={logoFooter} alt="Gamed Logo" id="logo-footer"></img>
              <img
                src={location}
                alt="location icon"
                id="locationIcon-logo"
              ></img>
              <p id="locationIcon-logo-content">
                TF Kuboye Street, Lekki, Lagos State
              </p>
              <img
                src={telephone}
                alt="telephone icon"
                id="teleIcon-logo"
              ></img>
              <p id="teleIcon-logo-content">07053875718</p>
              <img src={email} alt="email icon" id="emailIcon-logo"></img>
              <p id="emailIcon-logo-content">info@gamedadventure.com</p>
            </div>

            <div id="footer-contacts-links">
              <header id="quick-links">Quick Links</header>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>

            <div id="footer-contacts-socials">
              <header id="socials">Socials</header>
              <img src={fbLogo} alt="Facebook logo"></img>
              <img src={ig} alt="Instagram logo"></img>
              <img src={twitter} alt="Twitter/X logo"></img>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingFooter;
