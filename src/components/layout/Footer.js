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
      <div className="list-wrapper">
        <div className="footer-list">
          <span className="title-list">Features</span>
          <ul>
            <li>
              <a href="#" target="_blank">
                Link Shortening
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Branded Links
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <span className="title-list">Resource</span>
          <ul>
            <li>
              <a href="#" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Developers
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <span className="title-list">Company</span>
          <ul>
            <li>
              <a href="#" target="_blank">
                About
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Careers
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Contact
              </a>
            </li>
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
