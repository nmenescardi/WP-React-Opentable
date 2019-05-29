import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimeList from './fields/TimeList';
import RestaurantList from './fields/RestaurantList';
import PeopleList from './fields/PeopleList';

import { timeList, restaurantList, peopleList } from '../utils/initialValues';

export default class InitialForm extends Component {
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
          <RestaurantList
            restaurantList={restaurantList}
            handleChange={handleChange}
            restaurant={restaurant}
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
          <TimeList
            timeList={timeList}
            handleChange={handleChange}
            time={time}
          />
          <br />
          <PeopleList
            peopleList={peopleList}
            handleChange={handleChange}
            people={people}
          />
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
