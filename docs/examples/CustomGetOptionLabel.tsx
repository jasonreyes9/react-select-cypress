import React from 'react';
import Select from 'react-select';
import { flavourOptions } from '../data';

export default () => (
  <>
    <p>
      Composing a display label from the label property and rating property in
      the options object
    </p>
    <Select
      defaultValue={flavourOptions[0]}
      isClearable
      isSearchable
      name="color"
      options={flavourOptions}
      getOptionLabel={(option) => `${option.label}: ${option.rating}`}
    />
  </>
);
