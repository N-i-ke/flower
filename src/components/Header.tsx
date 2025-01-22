import React from "react";
import logo from "../assets/logo.svg"; // ロゴ画像のパスを変更してください
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header_inner">
        <div className="header_left">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="header_right">
          <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <nav className="globalMenuSp">
            <ul>
              <li><a href="#INFO">INFOMATION</a></li>
              <li><a href="#GALL">GALLERY</a></li>
              <li><a href="#ACCESS">ACCESS</a></li>
              <li><a href="#CONTACT">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
