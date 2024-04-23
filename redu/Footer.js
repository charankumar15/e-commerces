import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="https://www.shopify.com">Shopify</a></li>
            <li><a href="https://www.shopify.com/careers">Careers</a></li>
            <li><a href="https://www.shopify.com/investors">Investors</a></li>
            <li><a href="https://www.shopify.com/press">Press and Media</a></li>
            <li><a href="https://www.shopify.com/partners">Partners</a></li>
            <li><a href="https://www.shopify.com/affiliates">Affiliates</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="https://www.shopify.com/legal/terms">Terms of Service</a></li>
            <li><a href="https://www.shopify.com/legal/privacy">Privacy Policy</a></li>
            <li><a href="https://www.shopify.com/sitemap">Sitemap</a></li>
            <li><a href="https://www.shopify.com/legal/privacy-choices">Privacy Choices</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="https://www.shopify.com/support">Service status</a></li>
            <li><a href="https://www.shopify.com/support/merchant">Merchant support</a></li>
            <li><a href="https://www.shopify.com/support">Help center</a></li>
            <li><a href="https://www.shopify.com/partners">Hire a Partner</a></li>
            <li><a href="https://community.shopify.com/">Shopify Community</a></li>
            <li><a href="https://www.shopify.com/events">Shopify Events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Developers</h3>
          <ul>
            <li><a href="https://www.shopify.dev">Shopify.dev</a></li>
            <li><a href="https://www.shopify.dev/docs">API documentation</a></li>
            <li><a href="https://www.shopify.dev/dev-degree">Dev Degree</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com"><i className="fab fa-facebook">facebook</i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter">twitter</i></a>
        <a href="https://www.youtube.com"><i className="fab fa-youtube">youtube</i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram">instagram</i></a>
        <a href="https://www.tiktok.com"><i className="fab fa-tiktok">tiktok</i></a>
        <a href="https://www.linkedin.com"><i className="fab fa-linkedin">linkedin</i></a>
      </div>
    </footer>
  );
}

export default Footer;
