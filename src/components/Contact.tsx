import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact" id="CONTACT">
      <div className="contact_inner">
        <div className="contact_box">
          <h1>CONTACT </h1>
        </div>
        <div className="button">
          <button className="first_btn">
            <a href="#">出展に関するお問い合わせ</a>
          </button>
          <button className="second_btn">
            <a href="#">その他お問い合わせ</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
