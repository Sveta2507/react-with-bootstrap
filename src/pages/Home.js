import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Dark clouds</Card.Title>
                <Card.Text>Thunder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Yellow fullmoon</Card.Title>
                <Card.Text>Midnight</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Striped miracle</Card.Title>
                <Card.Text>Moonlight</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img2}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Cats</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor modi suscipit nobis deleniti tenetur. Non hic quis facere
              debitis, eligendi cum consequatur fugiat totam ullam dolorum
              dignissimos voluptatibus ea voluptates saepe recusandae sapiente
              eius, accusantium temporibus. Obcaecati harum repudiandae adipisci
              quae officia quaerat, magnam minima ex id ullam eum?
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img1}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>General</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor modi suscipit nobis deleniti tenetur. Non hic quis facere
              debitis, eligendi cum consequatur fugiat totam ullam dolorum
              dignissimos voluptatibus ea voluptates saepe recusandae sapiente
              eius, accusantium temporibus. Obcaecati harum repudiandae adipisci
              quae officia quaerat, magnam minima ex id ullam eum?
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img3}
              height={200}
              alt="img"
              style={{ padding: "10px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Additional</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor modi suscipit nobis deleniti tenetur. Non hic quis facere
              debitis, eligendi cum consequatur fugiat totam ullam dolorum
              dignissimos voluptatibus ea voluptates saepe recusandae sapiente
              eius, accusantium temporibus. Obcaecati harum repudiandae adipisci
              quae officia quaerat, magnam minima ex id ullam eum?
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
