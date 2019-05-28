import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
/* import RaisedButton from 'material-ui/RaisedButton';
 */

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
          <FormControl>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              /*  value={values.age}
              onChange={handleChange} */
              inputProps={{
                name: 'age',
                id: 'age-simple'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}
