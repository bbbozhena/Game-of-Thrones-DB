import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacerPage from "../characterPage";

export default class App extends Component {
  state = {
    showRandomChar: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <button
                className="toggle-btn btn-info"
                onClick={this.toggleRandomChar}
              >
                {" "}
                Toggle random character
              </button>
            </Col>
          </Row>
          <CharacerPage />

          <Row>
        <Col md="6">
          <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>


        </Container>
      </>
    );
  }
}
