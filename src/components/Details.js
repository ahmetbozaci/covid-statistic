/** @format */

import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const state = useSelector((state) => state.countryReducer);
  return (
    <div>
      <p>
        <b>Country</b>
        {' '}
        {state.Country_text}
      </p>
      <p>
        <b>Last Update</b>
        {state['Last Update']}
        {' '}
      </p>
      <p>
        <b>New Case</b>
        {' '}
        {state['New Cases_text']}
      </p>
      <p>
        <b>Total Case</b>
        {' '}
        {state['Total Cases_text']}
        {' '}
      </p>
      <p>
        <b>Total Death</b>
        {' '}
        {state['Total Deaths_text']}
      </p>
      <p>
        <b>Country</b>
        {state['Total Recovered_text']}
        {' '}
      </p>
      <p>
        <b>Country</b>
        {state['Total Recovered_text']}
        {' '}
      </p>
    </div>
  );
}
