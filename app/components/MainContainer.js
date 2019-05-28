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

  render() {
    return <InitialForm />;
  }
}
