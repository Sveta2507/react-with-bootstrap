import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";
import withAuthContext from "../components/hoc/withAuthContext";
import Pexel from "../components/Pexels";
import api from "../serveces/pexelApi";

class About extends Component {
  state = {
    query: "cats",
    page: 1,
    gallery: [],
  };
  componentDidMount() {
    const { query, page } = this.state;
    api.getFetch(query, page).then((result) => {
      console.log(result);
      this.setState(() => ({ gallery: [...result] }));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      api.getFetch(this.state.query, this.state.page).then((result) => {
        this.setState(() => ({ gallery: [...result] }));
      });
    }
  }

  getQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    console.log(this.props.auth);
    const { auth } = this.props;
    const { gallery } = this.state;
    return (
      <>
        {auth.user ? <h2>About {auth.user.name}</h2> : <h2>About</h2>}
        <Jumbo />
        <Container gallery={gallery}>
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
          <Pexel gallery={gallery} getQuery={this.getQuery} />
        </Container>
      </>
    );
  }
}

export default withAuthContext(About);
