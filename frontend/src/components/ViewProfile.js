import React from 'react';
import {
  Row,
  Col,
  Button
} from 'react-materialize';

export default class viewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.changeAction = this.changeAction.bind(this);
  }
  
  changeAction() {
    this.props.callback(this.props.profile, 'signup')
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Row>
          <Col s={4}>
            <img className="circle" width="200" height="200" />
          </Col>
          <Col s={5}>
            <h1>Display Name {profile.displayName}</h1>
          </Col>
          <Col s={3}>
            <Button className="right" onClick={this.changeAction}>Edit</Button>
          </Col>
        </Row>
        <Row>
          <Col s={3}>
            <h6>Birthday {profile.birthday}</h6>
          </Col>
          <Col s={3}>
            <h6>Gender {profile.gender['name']}</h6>
          </Col>
          <Col s={3}>
            <h6>Ethnicity {profile.ethnicity.name}</h6>
          </Col>
          <Col s={3}>
            <h6>Religion {profile.religion.name}</h6>
          </Col>
        </Row>
        <Row>
          <Col s={3}>
            <h6>Height {profile.height}</h6>
          </Col>
          <Col s={3}>
            <h6>Figure {profile.figure.name}</h6>
          </Col>
          <Col s={3}>
            <h6>About Me {profile.aboutMe}</h6>
          </Col>
          <Col s={3}>
            <h6>Location {profile.location.city}</h6>
          </Col>
        </Row>
      </div>
    )
  }
}