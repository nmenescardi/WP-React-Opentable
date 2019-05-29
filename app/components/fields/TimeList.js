import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const TimeList = ({ timeList, time, handleChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="time-selector">Time</InputLabel>
      <Select
        value={time}
        onChange={handleChange('time')}
        inputProps={{
          name: 'time',
          id: 'time-selector'
        }}
      >
        {timeList.map(item => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeList;
