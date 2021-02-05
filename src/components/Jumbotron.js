import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/imgg.jpeg";

const Styles = styled.div`
  .jumbo {
    background: url(${img1}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 500px;
    position: relative;
    z-index: -z;
  }
  .overlay {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <Jumbotron className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1>Lovely creatures for everyone specifically!</h1>
          <p style={{ fontSize: "30px" }}>
            Cats are what makes each house a cozzy home. The heart is where the
            cat is.
          </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}

export default Jumbo;
