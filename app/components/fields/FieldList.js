import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withContext } from '../../utils/context';

const FieldList = ({ list, fieldLabel, value, handleChange }) => {
  const fieldLabelCapitalized =
    fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={`${fieldLabel}-selector`}>
        {fieldLabelCapitalized}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange(fieldLabel)}
        inputProps={{
          name: fieldLabel,
          id: `${fieldLabel}-selector`
        }}
      >
        {list.map(item => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withContext(FieldList);
