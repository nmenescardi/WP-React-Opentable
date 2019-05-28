import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const PeopleList = ({ peopleList, values, handleChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="people-selector">People</InputLabel>
      <Select
        value={values.people}
        onChange={handleChange('people')}
        inputProps={{
          name: 'people',
          id: 'people-selector'
        }}
      >
        {peopleList.map(item => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PeopleList;
