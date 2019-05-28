import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class InitialForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Make a Reservation" showMenuIconButton={false} />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
