import React from "react";
import img1 from "../images/cat1.jpg";
import img2 from "../images/cat3.jpg";
import img3 from "../images/cat2.jpg";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "2000px" }}>
        <img
          src={img1}
          alt="img"
          className="d-block w-100"
          style={{ height: "1600px" }}
        />
        <h2 style={{ paddingBottom: "10px" }}>Striped miracle</h2>
        <p style={{ fontSize: "30px" }}>
          "Yeah, I allow you to live in my house but you will have to take care
          of me then miauuuuu ;3"
        </p>
      </Carousel.Item>
      <Carousel.Item style={{ height: "2000px" }}>
        <img
          src={img3}
          alt="img"
          className="d-block w-100"
          style={{ height: "1600px" }}
        />
        <h2 style={{ paddingBottom: "10px" }}>Foggy view</h2>
        <p style={{ fontSize: "30px" }}>
          "You are worth my attention as long as I feel that fantastic scent of
          fish out of your bag"
        </p>
      </Carousel.Item>
      <Carousel.Item style={{ height: "2000px" }}>
        <img
          src={img2}
          alt="img"
          className="d-block w-100"
          style={{ height: "1600px" }}
        />
        <h2 style={{ paddingBottom: "10px" }}>Yellow fullmoon</h2>
        <p style={{ fontSize: "30px" }}>"I'm way too independant for you"</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
