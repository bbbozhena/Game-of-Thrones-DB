import React, { Component, useState } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        {!hidden ? (
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <RandomChar />
            </Col>
          </Row>
        ) : null}

        <button className="btn btn-info" onClick={() => setHidden((s) => !s)}>
         
          Press
        </button>
        <Row>
          <Col md="6">
            <ItemList />
          </Col>
          <Col md="6">
            <CharDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
