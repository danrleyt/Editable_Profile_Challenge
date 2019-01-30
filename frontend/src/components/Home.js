import React from 'react';
import {
  Row,
  Col,
  Button
} from 'react-materialize';
import ProfileForm from './ProfileForm';
import infoService from '../services/infoService';
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
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const payload = await infoService.getProfiles();
      if (payload.data.length > 0) {
        const profile = payload.data[0];
        this.showData(profile, 'view');
      } 
    } catch (error) {
      console.log(error);
    }
  }

  changeView(view) {
    this.setState({ action: view });
  }

  showData = (profile, action) => {
    this.setState({ profile });
    console.log(profile);
    this.changeView(action);
  }

  returnView() {
    const { action, profile } = this.state;
    if (action === 'home') {
      return (
        <Row>
          <Col s={12}>
            <h2 className="center">Welcome to the Social Network</h2>
          </Col>
          <Col s={12} className="center">
            <h4>Sign up and meet new people</h4>
            <Button id="signup" onClick={() => this.changeView('signup')}>Signup</Button>
          </Col>
        </Row>
      )
    } else if (action === 'signup') {
      return (
        <ProfileForm callback={this.showData}></ProfileForm>
      )
    } else if (action === 'view') {
      return (
        <ViewProfile callback={this.showData} profile={profile}></ViewProfile>
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