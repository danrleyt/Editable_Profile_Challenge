import React from 'react';
import userImg from '../res/user.png';

function buildImageSelector() {
  const imageSelector = document.createElement('input');
  imageSelector.setAttribute('type', 'image');
  return imageSelector;
}

export default class imageDialog extends React.Component {
  componentDidMount() {
    this.imageSelector = buildImageSelector();
  }

  handleImageSelect = (e) => {
    e.preventDefault();
    this.imageSelector.click();
  }

  render() {
    return <img onClick={this.handleImageSelect} className="circle center-align" width="100" height="100" src={userImg} />
  }
}