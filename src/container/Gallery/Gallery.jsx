import React from "react";
import {

  BsArrowLeftShort,
  BsArrowRightShort,
  BsLinkedin,
} from "react-icons/bs";
import { Fade } from "react-reveal";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <Fade bottom>
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
        </Fade>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <Fade left>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <a href="https://www.linkedin.com/in/sacha-ory-developer/" target="_blank" className="gallery__image-icon" rel="nofollow noreferrer"  >
                  <BsLinkedin  />
                </a>
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Gallery;
