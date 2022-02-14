import React from "react";
import "./SliderComponent.css";
import Logo from './../Headercomponent/Logo';

const Footer = () => {
  return (
    <section id="footerBlock">
      <article>
        <div className="spotifyLogo">
          <Logo />
        </div>
        <div className="company">
          <h3 style={{ color: "grey" }}>Company</h3>
          <h3>About</h3>
          <h3>Jobs</h3>
          <h3>For the Record</h3>
        </div>
        <div className="communities">
          <h3 style={{ color: "grey" }}>Communities</h3>
          <h3>For Artists</h3>
          <h3>Developers</h3>
          <h3>Advertising</h3>
          <h3>Investors</h3>
          <h3>Vendors</h3>
        </div>
        <div className="usefulLinks">
          <h3 style={{ color: "grey" }}>Useful Links</h3>
          <h3>Support</h3>
          <h3>Web Player</h3>
          <h3>Free Mobile App</h3>
        </div>
        <div className="socialMedia">
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <i class="fab fa-twitter"></i>
          </span>
          <span>
            <i class="fab fa-facebook-f"></i>
          </span>
        </div>
      </article>
      <footer className="mainFooter">
        <div className="footer">
          <h6>Legal</h6>
          <h6>Privacy Center</h6>
          <h6>Privacy Policy</h6>
          <h6>Cookies</h6>
          <h6>About Ads</h6>
          <h6>Additional CA Privacy Disclosures</h6>
        </div>
        <div style={{ color: "grey" }} className="secondFooter">
          <h6>
            <span>
              <i class="far fa-globe-africa"></i>
            </span>
            USA
          </h6>
          <h6> © 2021 Spotify AB</h6>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
