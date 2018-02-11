// @flow

import React, { Component } from 'react';
import { Code, Link, H1, Hr, Note } from '../components';

import Select from '../../src';
import { colourOptions, groupedOptions } from '../data';

const changes = [
  { icon: '🎨', text: 'CSS-in-JS with a complete styling API' },
  {
    icon: '🏗',
    text: 'Replace any of the built-in rendering components',
  },
  {
    icon: '🤖',
    text: 'Simpler and more extensible; fewer props',
  },
  { icon: '⚡️', text: 'Attention to detail and performance' },
];
const List = ({ items }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {items.map(({ icon, text }, j) => (
      <li key={j} style={{ alignItems: 'center', display: 'flex ' }}>
        <span style={{ fontSize: 24, marginRight: '0.5em' }}>{icon}</span>
        <span style={{ fontSize: 14 }}>{text}</span>
      </li>
    ))}
  </ul>
);

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};
const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

type State = {
  isClearable: boolean,
  isDisabled: boolean,
  isLoading: boolean,
  isRtl: boolean,
};

export default class Home extends Component<*, State> {
  state = {
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
  };
  toggleClearable = () =>
    this.setState(state => ({ isClearable: !state.isClearable }));
  toggleDisabled = () =>
    this.setState(state => ({ isDisabled: !state.isDisabled }));
  toggleLoading = () =>
    this.setState(state => ({ isLoading: !state.isLoading }));
  toggleRtl = () => this.setState(state => ({ isRtl: !state.isRtl }));
  render() {
    return (
      <div>
        <H1>
          React Select v2{' '}
          <small style={{ color: '#999', fontWeight: 500 }}>(alpha)</small>
        </H1>
        <h4>Areas of improvement on v1:</h4>
        <List items={changes} />
        <h4>Try it out:</h4>
        <p>
          <Code>yarn add react-select@next</Code>
        </p>
        <p style={{ color: '#999' }}>
          <Link
            href="https://github.com/JedWatson/react-select/tree/v2"
            target="_blank"
          >
            GitHub Project
          </Link>{' '}
          &middot;{' '}
          <Link
            href="https://github.com/JedWatson/react-select/blob/v2/examples/pages/Home.js"
            target="_blank"
          >
            Examples Source
          </Link>
        </p>

        <h2 css={{ marginTop: '2em' }}>Basic Usage</h2>
        <h4>Single Select</h4>
        <div>
          <Select
            autoFocus
            defaultValue={colourOptions[0]}
            isClearable={this.state.isClearable}
            isDisabled={this.state.isDisabled}
            isLoading={this.state.isLoading}
            isRtl={this.state.isRtl}
            name="color"
            options={colourOptions}
          />
        </div>
        <Note Tag="label">
          <input type="checkbox" onChange={this.toggleClearable} />
          Clearable
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <input type="checkbox" onChange={this.toggleDisabled} />
          Disabled
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <input type="checkbox" onChange={this.toggleLoading} />
          Loading
        </Note>
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <input type="checkbox" onChange={this.toggleRtl} />
          RTL
        </Note>
        <h4>Grouped</h4>
        <div>
          <Select
            defaultValue={colourOptions[1]}
            formatGroupLabel={formatGroupLabel}
            options={groupedOptions}
          />
        </div>
        <Hr />
        <h4>Multi Select</h4>
        <div>
          <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
          />
        </div>
      </div>
    );
  }
}
