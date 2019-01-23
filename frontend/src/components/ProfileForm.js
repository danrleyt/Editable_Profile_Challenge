import React from 'react';
import {
  Row,
  Col,
  Input,
  Autocomplete,
  Button,
  Collapsible,
  CollapsibleItem,
} from 'react-materialize';
import Loader from './Loader';
import Options from './Options';
import infoService from '../services/infoService';
import userImg from '../res/user.png';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
      profile: {}
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  async getData() {
    try {
      const singleSelectionPayload = await infoService.getSingleSelections();
      const citiesPayload = await infoService.getCities();
      const data = Object.assign({}, singleSelectionPayload.data, { cities: citiesPayload });
      this.setState(data);
      this.setState({ dataFetched: true });
      console.log(this.state);
    } catch (error) {
      throw error
    }
  }

  componentWillMount() {
    this.getData();
  }

  handleChange(event) {
    const { profile } = this.state;
    profile[event.target.name] = event.target.value;
    this.setState({ profile });
    console.log(this.state.profile);
  }

  handleChangeSelect(event) {
    const { profile } = this.state;
    profile[event.target.name] = this.state[event.target.name][event.target.value];
    this.setState({ profile });
    console.log(this.state.profile);
  }

  handleChangeCity(event) {
    const { profile } = this.state;
    profile[event.target.name] = this.state.cities[event.target.value];
    this.setState({ profile });
    console.log(this.state.profile)
  }

  render() {
    return (
      <div>
        {
          this.state.dataFetched ?
            <form id="addDevice" >
              <Row>
                <Col s={2}>
                  <img className="circle center-align" width="100" height="100" src={userImg} />
                </Col>
                <Input s={5} type="text" label="Display Name *" id="deviceName" required name="displayName" onChange={this.handleChange} />
                <Input s={5} type="text" label="Real Name *" id="deviceName" required name="realName" onChange={this.handleChange} />
              </Row>
              <div className="row">
                <div className="col s6">
                  <label for="birthday">Birthday *</label>
                  <input type="date" className="browser-default" label="Birthday" id="birthday" required name="birthday" onChange={this.handleChange} />
                </div>
                <div className="col s6">
                  <label for="height">Height</label>
                  <input type="number" step="0.001" min="0.00" max="3.00" id="height" required name="height" onChange={this.handleChange} />
                </div>
              </div>
              <Row>
                <Options data={this.state.gender} fieldLabel="Gender *" fieldName="gender" required onChange={this.handleChangeSelect} />
                <Options data={this.state.ethnicity} fieldLabel="Ethnicity" fieldName="ethnicity" required={false} onChange={this.handleChangeSelect} />
                <Options data={this.state.religion} fieldLabel="Religion" fieldName="religion" required={false} onChange={this.handleChangeSelect} />
                <Options data={this.state.figure} fieldLabel="Figure" fieldName="figure" required={false} onChange={this.handleChangeSelect} />
              </Row>
              <Row>
                <Options data={this.state.marital_status} fieldLabel="Marital Status *" fieldName="marital_status" required onChange={this.handleChangeSelect} />
                <Input s={4} type='text' label="Occupation" name="occupation" onChange={this.handleChange} />
                <Autocomplete
                  s={5}
                  title="Location *"
                  required
                  data={
                    {
                      ...this.state.cities
                    }
                  }
                  name="location"
                  onChange={this.handleChange}
                />
              </Row>
              <Input s={12} type='textarea' label="About Me" name="aboutMe" onChange={this.handleChange} />
              <Button type="submit" className="right">Save Profile</Button>
            </form>
            : <Loader />
        }
      </div>
    )
  }
}
