/** @format */

import { loadData } from './covid';
import { loadCountryData } from './countries';

// https://covid-19.dataflowkit.com/v1 - List all results per country.
// https://covid-19.dataflowkit.com/v1/world - summary results for the whole world.
// https://covid-19.dataflowkit.com/v1/spain - COVID-19 cases for Spain.
// https://covid-19.dataflowkit.com/v1/USA - COVID-19 cases for USA.

const URL = 'https://covid-19.dataflowkit.com/v1';

const getData = (endpoint = '') => async (dispatch) => {
  const response = await fetch(`${URL}${endpoint}`);
  const data = await response.json();
  dispatch(loadData(data));
};

export const getCountryData = (endpoint = 'spain') => async (dispatch) => {
  const response = await fetch(`${URL}/${endpoint}`);
  const data = await response.json();
  dispatch(loadCountryData(data));
};

export default getData;
