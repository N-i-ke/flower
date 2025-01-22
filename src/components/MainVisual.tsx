import React from "react";
import mainVisual1 from "../assets/mainvisual1.jpg";
import mainVisual2 from "../assets/mainvisual2.jpg";
import mainVisual3 from "../assets/mainvisual3.jpg";

const MainVisual: React.FC = () => {
  return (
    <section className="main_visual">
      <div className="visual_inner">
        <figure>
          <img src={mainVisual1} alt="Main Visual 1" className="main_img" />
          <img src={mainVisual2} alt="Main Visual 2" className="main_img" />
          <img src={mainVisual3} alt="Main Visual 3" className="main_img" />
        </figure>
      </div>
    </section>
  );
};

export default MainVisual;
