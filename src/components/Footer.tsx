import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "black" }} id="CONTACT">
      <div className="footer_inner">
        <div className="footer_box">
          <div className="footer_left">
            <p>FA EXHIBITION</p>
            <p>〒152-0035 東京都目黒区自由が丘1-1-1 PARK SIDE HALL</p>
            <p className="contact">
              Tel: 03-1111-1111
              <br />
              E-mail: info@xxxxxx.jp
            </p>
            <ul className="sns">
              <li><a href="">Twitter</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
            </ul>
          </div>
          <div className="footer_right">
            <ul className="copyright">
              <li><a href="">PRIVACY POLICY</a></li>
              <li>© FA EXHIBITION</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
