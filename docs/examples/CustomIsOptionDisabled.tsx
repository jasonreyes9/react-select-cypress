import React from 'react';
import Select from 'react-select';
import { flavourOptions } from '../data';

export default () => (
  <>
    <p>
      Disable all options that do not have a 'safe' rating, via the
      isOptionsDisabled fn prop
    </p>
    <Select
      defaultValue={flavourOptions[0]}
      isClearable
      isSearchable
      name="color"
      options={flavourOptions}
      isOptionDisabled={(option) => option.rating !== 'safe'}
    />
  </>
);
