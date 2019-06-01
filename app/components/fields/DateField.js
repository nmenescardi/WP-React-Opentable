import React, { Component } from 'react';
import { withContext } from '../../utils/context';
import TextField from 'material-ui/TextField';

class DateField extends Component {
  render() {
    const { handleChange, date } = this.props;

    return (
      <TextField
        id="date"
        label="Date"
        type="date"
        fullWidth
        onChange={handleChange('date')}
        value={date}
        /* className={classes.textField} */
      />
    );
  }
}

export default withContext(DateField);
