const LOAD_COUNTRY_DATA = 'reactCapstone/covid/LOAD_COUNTRY_DATA';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const loadCountryData = (apiState) => ({
  type: LOAD_COUNTRY_DATA,
  payload: apiState,
});

export default reducer;
