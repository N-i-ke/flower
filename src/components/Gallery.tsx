import React from "react";
import flower1 from "../assets/flower1.jpg";
import flower2 from "../assets/flower2.jpg";
import flower3 from "../assets/flower3.jpg";
import flower4 from "../assets/flower4.jpg";
import flower5 from "../assets/flower5.jpg";
import flower6 from "../assets/flower6.jpg";

const images = [flower1, flower2, flower3, flower4, flower5, flower6];

const Gallery: React.FC = () => {
  return (
    <section className="gallery" id="GALL">
      <div className="gallery_inner">
        <div className="gallery_ttl fade-in">
          <h1>GALLERY</h1>
        </div>
        <ul className="gallery_list">
          {images.map((img, index) => (
            <li key={index}>
              <img className="fade-in" src={img} alt={`Flower ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
