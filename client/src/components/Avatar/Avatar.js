import React, { Component } from 'react';
import images from '../../images.json';
import avatars from "../../avatars.json";
import './Avatar.css';

class Avatar extends Component {
  render() {

    const {name} = this.props;

    let avatarSrc;
    // if name was provided and name matches any key in avatars.json
    if(name && avatars[name]) {
      avatarSrc = avatars[name].src;
   } else {
      // if no avatar name was provided, empty seat will be set as the source
      avatarSrc = avatars["EmptySeat"].src;
    }

    return (
        <img className="avatar" src = { avatarSrc} /> 
    );
  }
}
  
  export default Avatar;