import React from 'react';
import {
  Row,
  Col,
  Button
} from 'react-materialize';

export default class viewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={4}>
            <img className="circle" width="200" height="200" />
          </Col>
          <Col s={5}>
            <h1>Display Name</h1>
          </Col>
          <Col s={3}>
            <Button className="right">Edit</Button>
          </Col>
        </Row>
        <Row>
          <Col s={3}>
            <h6>Birthday</h6>
          </Col>
          <Col s={3}>
            <h6>Gender</h6>
          </Col>
          <Col s={3}>
            <h6>Ethnicity</h6>
          </Col>
          <Col s={3}>
            <h6>Religion</h6>
          </Col>
        </Row>
        <Row>
          <Col s={3}>
            <h6>Height</h6>
          </Col>
          <Col s={3}>
            <h6>Figure</h6>
          </Col>
          <Col s={3}>
            <h6>About Me</h6>
          </Col>
          <Col s={3}>
            <h6>Location</h6>
          </Col>
        </Row>
      </div>
    )
  }
}