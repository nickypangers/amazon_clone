import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        <p>Back To Top</p>
      </div>
      <div className="footer__content">
        {/* <h1>Content</h1> */}
        <div className="footer__contentLinks getToKnowUs">
          <h2>Get to Know Us</h2>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
          </ul>
        </div>
        <div className="footer__contentLinks makeMoneyWithUs">
          <h2>Make Money with Us</h2>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>
        <div className="footer__contentLinks amazonPaymentProducts">
          <h2>Amazon Payment Products</h2>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__contentLinks letUsHelpYou">
          <h2>Let Us Help You</h2>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Order</li>
            <li>Shipping Rates and Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content & Devices</li>
            <li>Amazon Assistance</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      {/* <div className="footer__options">
        <h1>Options</h1>
      </div> */}
    </div>
  );
}

export default Footer;
