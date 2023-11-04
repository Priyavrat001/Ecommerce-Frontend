import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png" alt="playstore" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VHug-W1jZ__hBrcEGEhEsuZV2ghsB3EUrw&usqp=CAU" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;