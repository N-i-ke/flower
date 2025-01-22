import React from "react";

const MainVisual: React.FC = () => {
  return (
    <section className="main_visual">
      <div className="visual_inner">
        <figure>
          <img src="img/mainvisual1.jpg" alt="Main Visual 1" className="main_img" />
          <img src="img/mainvisual2.jpg" alt="Main Visual 2" className="main_img" />
          <img src="img/mainvisual3.jpg" alt="Main Visual 3" className="main_img" />
        </figure>
      </div>
    </section>
  );
};

export default MainVisual;
