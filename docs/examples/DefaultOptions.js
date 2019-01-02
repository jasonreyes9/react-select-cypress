import React, { Component } from 'react';

import AsyncSelect from '../../src/Async';
import { colourOptions } from '../data';

type State = {
  inputValue: string,
};

const filterColors = (inputValue: string) => {
  if (inputValue) {
    return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
  }
  return colourOptions;
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <AsyncSelect cacheOptions defaultOptions={colourOptions} loadOptions={promiseOptions} />
    );
  }
}
