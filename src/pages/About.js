import React from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";

function About() {
  return (
    <>
      <h2>About</h2>
      <Jumbo />
      <Container>
        <h2>Title</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="2">1</th>
              <th colSpan="2">2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default About;
