import { loadData } from './covid';

const URL = 'https://covid-19.dataflowkit.com/v1';

const getWorldData = (endpoint) => async (dispatch) => {
  const response = await fetch(`${URL}${endpoint}`);
  const data = await response.json();
  dispatch(loadData(data));
};

export default getWorldData;
