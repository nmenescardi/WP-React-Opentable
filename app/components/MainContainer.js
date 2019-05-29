import React, { Component } from 'react';
import InitialForm from './InitialForm';
export default class MainContainer extends Component {
  state = {
    restaurant: '',
    date: '',
    time: '',
    people: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: ''
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  findATableModal = () => {
    return;
  };

  render() {
    return (
      <InitialForm
        handleChange={this.handleChange}
        values={{ ...this.state }}
        findATableModal={this.findATableModal}
      />
    );
  }
}
