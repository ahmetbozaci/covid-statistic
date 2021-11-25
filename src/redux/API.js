import { loadWorldData, loadCountryData } from './covid';

const URL = 'https://covid-19.dataflowkit.com/v1';

export const getWorldData = async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  dispatch(loadWorldData(data));
};

export const getCountryData = (endpoint) => async (dispatch) => {
  const response = await fetch(`${URL}${endpoint}`);
  const data = await response.json();
  dispatch(loadCountryData(data));
};
