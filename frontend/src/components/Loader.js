import React from 'react';
import { Row, Col, Preloader } from 'react-materialize';

const Loader = (props) => {
  return (
    <Row>
      <Col s={12}>
        <Preloader size="big" />
      </Col>
    </Row>
  )
}

export default Loader;