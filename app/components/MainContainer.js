import React, { Component, Fragment } from 'react';
import InitialForm from './InitialForm';
import FindATableModal from './FindATableModal';
// import custom modal. Pass modalOpen. Modal have both tabs/forms and its own state

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

  render() {
    return (
      <Fragment>
        <InitialForm
          handleChange={this.handleChange}
          values={{ ...this.state }}
          openFindATableModal={this.openFindATableModal}
        />
        <FindATableModal
          modalOpen={this.state.modalOpen}
          closeFindATableModal={this.closeFindATableModal}
        />
      </Fragment>
    );
  }
}
