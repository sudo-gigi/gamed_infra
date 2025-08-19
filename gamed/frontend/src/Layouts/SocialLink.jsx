import React from "react";
import googleIcon from "../assets/images/google.svg";
import figmaIcon from "../assets/images/figma.svg";
import youtubeIcon from "../assets/images/youtube.svg";
import instagramIcon from "../assets/images/instagram.svg";
import "../Styles/Socials.css";

const socialLinks = [
  {
    name: "Google",
    icon: googleIcon,
    url: "https://www.google.com",
  },

  {
    name: "Figma",
    icon: figmaIcon,
    url: "https://www.figma.com",
  },

  {
    name: "YouTube",
    icon: youtubeIcon,
    url: "https://www.youtube.com",
  },

  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com",
  },
];

const SocialLink = () => {
  return (
    <section className="snap-section">
      <div id="social-navbar">
        <h2 id="social-heading">
          Companies where our <span id="header-line">learners work</span>
        </h2>
        <div id="social-link-container">
          <div id="social-links">
            <div id="scroll-track">
              {[
                ...socialLinks,
                ...socialLinks,
                ...socialLinks,
                ...socialLinks,
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  id="social-link"
                >
                  <img src={link.icon} alt={link.name} id="social-icon" />
                  <span id="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLink;
