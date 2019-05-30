import React, { Component, Fragment } from 'react';
import TimeList from './fields/TimeList';
import PeopleList from './fields/PeopleList';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { timeList, peopleList } from '../utils/initialValues';
import { withContext } from '../utils/context';

class FindATableForm extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <Fragment>
        <TextField
          id="date"
          label="Date"
          type="date"
          fullWidth
          /* onChange={handleChange('date')} */
          defaultValue="2019-06-24" // Today or state
          /* className={classes.textField} */
        />
        <br />
        {/*  <TimeList
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
        /> */}
      </Fragment>
    );
  }
}

export default withContext(FindATableForm);
