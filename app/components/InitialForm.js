import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FieldList from './fields/FieldList';
import DateField from './fields/DateField';
import { withContext } from '../utils/context';
import { timeList, restaurantList, peopleList } from '../utils/initialValues';

class InitialForm extends Component {
  render() {
    const { openFindATableModal, restaurant, time, people } = this.props;

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
          <DateField />
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
