import React from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";

function About() {
  return (
    <>
      <h2>About</h2>
      <Jumbo />
      <Container>
        <h2>Statistics</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="2">Life span</th>
              <th colSpan="1">Personality</th>
              <th>Health</th>
              <th>Care</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>British Shorthair</td>
              <td>14</td>
              <td>Calm, withdrawn, independant</td>
              <td>Strong</td>
              <td>Minimal</td>
            </tr>
            <tr>
              <td>Maine Coon</td>
              <td>18</td>
              <td>Playful, dominant, patient</td>
              <td>Strong</td>
              <td>Middle</td>
            </tr>
            <tr>
              <td>Exotic Shorthair</td>
              <td>10</td>
              <td>Cute, smart, playful, friendly</td>
              <td>Decent</td>
              <td>Middle</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default About;
