import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../images/1.jpeg";
import img2 from "../images/box1.jpg";
import img3 from "../images/box2.jpeg";
import img4 from "../images/2.jpeg";
import img5 from "../images/cat5.jpeg";
import classes from "../components/styles/fonts.css";
import Toggler from "../components/Toggler";

function Home() {
  return (
    <>
      <h1 className={classes.p}>The Generation of Cats</h1>
      <h2 className={classes.p}>Home</h2>
      <Toggler>
        {(isOpen, onToggle) => (
          <>
            <button type="button" onChange={onToggle} checked={isOpen}>
              {isOpen ? "hide" : "show"}
            </button>
            {isOpen && <Slider />}
          </>
        )}
      </Toggler>
      {/* <Slider /> */}
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>British Shorthair Cat</Card.Title>
                <Card.Text>
                  A British Shorthair is a dignified, intelligent and
                  affectionate companion. He’s not generally a lapcat, but he
                  will want to be at your side on the sofa or at least nearby.
                  Females tend to have a serious demeanor, while males are more
                  happy-go-lucky. These laidback cats can get along well with
                  dogs and are calm around children, but they don’t enjoy being
                  hauled around. Teach children to treat them with respect. Such
                  cat would be a great companion and a patient listener.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Maine Coon</Card.Title>
                <Card.Text>
                  The good-natured and affable Maine Coon adapts well to many
                  lifestyles and personalities. They like being with people and
                  have the habit of following them around, but they aren't
                  needy. They're happy to receive attention when you direct it
                  their way, but if you're busy, they're satisfied to just
                  supervise your doings. Close a door on them and they will wait
                  patiently for you to realize the error of your ways and let
                  them in. They're not typically a lap cat, but they do like to
                  be near you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Exotic Shorthair</Card.Title>
                <Card.Text>
                  the Exotic is sweet, docile and quiet, but don’t get the idea
                  that she is merely an adornment for the home. She loves to
                  play when she’s not sitting in a lap or being petted. Exotics
                  have a reputation for being more active and curious than their
                  Persian siblings, and they are more suited to an active
                  family. Males are said by some to be sweeter and more
                  affectionate than females, who are sometimes described as
                  aloof. They're also very smart and will happily learn tricks
                  or challenge their brain.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img4}
              height={200}
              alt="img"
              style={{ padding: "10px", width: "300px" }}
            />
          </Col>
          <Col md={7}>
            <h2>History</h2>
            <p>
              In the past, most notably in Egypt, people kept domestic cats
              because they hunted and ate mice and rats. Today, people often
              keep cats as pets. There are also domestic cats which live without
              being cared for by people. These kinds of cats are called "feral
              cats". The oldest evidence of cats kept as pets is from the
              Mediterranean island of Cyprus, around 7500 BC. Ancient Egyptians
              worshipped cats as gods, and often mummified them so they could be
              with their owners "for all of eternity".
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
              style={{ padding: "10px", width: "300px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Behaviour</h2>
            <p>
              Cats use many different sounds for communication, including
              meowing, purring, trilling, hissing, growling, squeaking,
              chirping, clicking and grunting.[18] Body posture is also
              important. The whole shape of the body changes when a cat is
              relaxed, or when it is alert. Also, the position of their ears and
              tail are used for communication, as well as their usual functions.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img
              src={img5}
              height={200}
              alt="img"
              style={{ padding: "10px", width: "300px" }}
            />
          </Col>
          <Col md={7}>
            <h2>Health</h2>
            <p>
              Cats do get diseases, and prevention is better than cure. It is
              most important to get a young cat vaccinated against some of the
              most deadly diseases. If a cat gets a disease, a veterinarian
              (animal doctor) can offer help. Some cats, depending on breed,
              gender, age, and general health, may be more susceptible to
              disease than others. Regular visits to a vet can keep a cat alive
              many extra years by catching sickness and disease early.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
