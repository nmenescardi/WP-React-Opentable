import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const RestaurantList = ({ restaurantList, values, handleChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="restaurant-selector">Restaurant</InputLabel>
      <Select
        value={values.restaurant}
        onChange={handleChange('restaurant')}
        inputProps={{
          name: 'restaurant',
          id: 'restaurant-selector'
        }}
      >
        {restaurantList.map(item => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RestaurantList;
