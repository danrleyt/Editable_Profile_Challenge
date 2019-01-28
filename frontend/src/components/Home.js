import React from 'react';
import {
  Row,
  Col,
  Button
} from 'react-materialize';
import ProfileForm from './ProfileForm';
import '../styles/main.css';
import ViewProfile from './ViewProfile';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      action: 'home'
    };
    this.changeView = this.changeView.bind(this);
    this.returnView = this.returnView.bind(this);
    this.showData = this.showData.bind(this);
  }

  changeView(view) {
    this.setState({ action: view });
  }

  showData = (profile) =>{
    console.log(profile)
  }

  returnView() {
    const { action } = this.state;
    if (action === 'home') {
      return (
        <Row>
          <Col s={12}>
            <h2 className="center">Welcome to the Social Network</h2>
          </Col>
          <Col s={12} className="center">
            <h4>Sign up and meet new people</h4>
            <Button onClick={() => this.changeView('signup')}>Signup</Button>
          </Col>
        </Row>
      )
    } else if (action === 'signup') {
      return (
        <ProfileForm profile={this.showData}></ProfileForm>
      )
    } else if (action === 'view') {
      return (
        <ViewProfile></ViewProfile>
      )
    }
  }

  render() {
    const { action } = this.state;
    return (
      <div className="container">
        {this.returnView()}
      </div>
    );
  }
}