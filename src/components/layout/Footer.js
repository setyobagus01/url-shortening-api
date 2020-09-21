import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/iconfacebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icontwitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/iconpinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/iconinstagram.svg";

function Footer() {
  return (
    <footer>
      <Logo className="logo-footer" />
      <div class="list-wrapper">
        <div className="footer-list">
          <span className="title-list">Features</span>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-list">
          <span className="title-list">Resource</span>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-list">
          <span className="title-list">Company</span>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="social-media">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

export default Footer;
