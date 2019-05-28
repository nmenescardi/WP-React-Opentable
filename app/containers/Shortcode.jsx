import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../components/MainContainer';

export default class Shortcode extends Component {
  render() {
    return <MainContainer />;
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};
