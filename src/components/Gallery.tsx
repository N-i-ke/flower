import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="gallery" id="GALL">
      <div className="gallery_inner">
        <div className="gallery_ttl fade-in">
          <h1>GALLERY</h1>
        </div>
        <ul className="gallery_list">
          {["flower1", "flower2", "flower3", "flower4", "flower5", "flower6"].map((img, index) => (
            <li key={index}>
              <img className="fade-in" src={`img/${img}.jpg`} alt={`Flower ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
