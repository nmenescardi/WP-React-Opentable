import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FieldList from './fields/FieldList';
import { withContext } from '../utils/context';
import { timeList, restaurantList, peopleList } from '../utils/initialValues';

class InitialForm extends Component {
  render() {
    const {
      handleChange,
      openFindATableModal,
      restaurant,
      time,
      people
    } = this.props;

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Make a Reservation" showMenuIconButton={false} />
          <FieldList
            list={restaurantList}
            fieldLabel="restaurant"
            value={restaurant}
          />
          <br />
          <TextField
            id="date"
            label="Date"
            type="date"
            fullWidth
            onChange={handleChange('date')}
            defaultValue="2019-06-24" // Today or state
            /* className={classes.textField} */
          />
          <br />
          <FieldList list={timeList} fieldLabel="time" value={time} />
          <br />
          <FieldList list={peopleList} fieldLabel="people" value={people} />
          <br />
          <RaisedButton
            label="Find a Table"
            primary={true}
            onClick={openFindATableModal}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withContext(InitialForm);
