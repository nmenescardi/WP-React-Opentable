import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
/* import RaisedButton from 'material-ui/RaisedButton'; */
import TimeList from './fields/TimeList';

import { timeList } from '../utils/initialValues';

export default class InitialForm extends Component {
  render() {
    const { handleChange, values } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Make a Reservation" showMenuIconButton={false} />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TimeList
            timeList={timeList}
            handleChange={handleChange}
            values={values}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
