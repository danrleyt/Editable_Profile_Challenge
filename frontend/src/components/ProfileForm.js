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
      profile: {},
      imageToUpload: {}
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleAutoComplete = this.handleAutoComplete.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
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

  handleAutoComplete(city) {
    const { profile, cities } = this.state;
    profile['location'] = cities[city];
    this.setState({ profile });
    console.log(this.state.profile)
  }

  handleImageSelect(e) {
    let { imageToUpload } = this.state;
    imageToUpload = e.target.files[0];
    this.setState({ imageToUpload });
  }

  async uploadImage(image) {
    const { profile } = this.state;
    try {
      const fileInfo = await infoService.uploadImage(image);
      profile['profilePicture'] = fileInfo.profilePicture;
      this.setState({ profile });
    } catch (error) {

    }
  }

  async submitProfile(e) {
    e.preventDefault();
    let { imageToUpload, profile } = this.state;
    try {
      if (Object.keys(imageToUpload).length) {
        //await this.uploadImage(imageToUpload);
      }
      //const res = await infoService.submitProfile(profile);
      this.props.callback(profile, 'view');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {
          this.state.dataFetched ?
            <form autoComplete='disabled' id="addDevice" onSubmit={this.submitProfile}>
              <Row>
                <Input autoComplete="displayName" s={6} type="text" label="Display Name *" id="deviceName" required name="displayName" onChange={this.handleChange} />
                <Input autoComplete="realName" s={6} type="text" label="Real Name *" id="deviceName" required name="realName" onChange={this.handleChange} />
              </Row>
              <Row>
                <Input s={12} label="Profile Picture" type="file" accept="image/*" onChange={this.handleImageSelect} />
              </Row>
              <div className="row">
                <div className="col s6">
                  <label >Birthday *</label>
                  <input autoComplete="birthday" type="date" className="browser-default" label="Birthday" id="birthday" required name="birthday" onChange={this.handleChange} />
                </div>
                <div className="col s6">
                  <label>Height</label>
                  <input autoComplete="height" type="number" step="0.001" min="0.00" max="3.00" id="height" required name="height" onChange={this.handleChange} />
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
                <Input autoComplete="occupation" s={4} type='text' label="Occupation" name="occupation" onChange={this.handleChange} />
                <Autocomplete
                  s={5}
                  title="Location *"
                  autoComplete="location"
                  required
                  data={
                    {
                      ...this.state.cities
                    }
                  }
                  name="location"
                  onAutocomplete={this.handleAutoComplete}
                />
              </Row>
              <Input autoComplete="aboutMe" s={12} type='textarea' label="About Me" name="aboutMe" onChange={this.handleChange} />
              <Button type="submit" className="right">Save Profile</Button>
            </form>
            : <Loader />
        }
      </div>
    )
  }
}
