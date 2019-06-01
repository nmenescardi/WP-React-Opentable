import React, { Component, Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { timeList, peopleList } from '../utils/initialValues';
import { withContext } from '../utils/context';
import FieldList from './fields/FieldList';
import DateField from './fields/DateField';

class FindATableForm extends Component {
  render() {
    const { time, people } = this.props;

    return (
      <Fragment>
        <DateField />
        <FieldList list={timeList} fieldLabel="time" value={time} />
        <FieldList list={peopleList} fieldLabel="people" value={people} />
        <RaisedButton
          label="Find a table"
          primary={true}
          /* onClick={closeFindATableModal} */
        />
      </Fragment>
    );
  }
}

export default withContext(FindATableForm);
