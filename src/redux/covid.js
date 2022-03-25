const LOAD_WORLD_DATA = 'reactCapstone/covid/LOAD_WORLD_DATA';
const LOAD_COUNTRY_DATA = 'reactCapstone/covid/LOAD_COUNTRY_DATA';

const initialState = {
  data: [],
  country: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORLD_DATA:
      return { ...state, data: [...action.payload] };
    case LOAD_COUNTRY_DATA:
      return { ...state, country: { ...action.payload } };
    default:
      return state;
  }
};

export const loadWorldData = (apiState) => ({
  type: LOAD_WORLD_DATA,
  payload: apiState,
});

export const loadCountryData = (apiState) => ({
  type: LOAD_COUNTRY_DATA,
  payload: apiState,
});

export default reducer;
