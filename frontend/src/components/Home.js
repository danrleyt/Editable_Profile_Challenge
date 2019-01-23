import React from 'react';
import {
  Row,
  Col
} from 'react-materialize';
import ProfileForm from './ProfileForm';
import '../styles/main.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <h2 className="center">Signup</h2>
          </Col>
        </Row>
        <ProfileForm></ProfileForm>
      </div>
    );
  }
}