import React, { Component, Fragment } from 'react';
import InitialForm from './InitialForm';
import FindATableModal from './FindATableModal';
import { Provider } from '../utils/context';

export default class MainContainer extends Component {
  state = {
    restaurant: '',
    date: '',
    time: '',
    people: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    modalOpen: false
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  openFindATableModal = () => {
    this.setState({ modalOpen: true });
  };

  closeFindATableModal = () => {
    this.setState({ modalOpen: false });
  };

  getContext = () => ({
    ...this.state,
    handleChange: this.handleChange
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <InitialForm
          handleChange={this.handleChange}
          openFindATableModal={this.openFindATableModal}
          {...this.state}
        />
        <FindATableModal
          handleChange={this.handleChange}
          closeFindATableModal={this.closeFindATableModal}
          {...this.state}
        />
      </Provider>
    );
  }
}
