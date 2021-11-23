/** @format */

import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../redux/configureStore';
import { getCountryData } from '../redux/API';

const Home = () => {
  const state = useSelector((state) => state.covidReducer);
  const firstItem = Math.floor(Math.random() * state.length + 1);
  const newState = state.slice(firstItem, firstItem + 10);

  // const handleClick = (e) => {
  //   console.log('hello');
  //   console.log(e);
  //   store.dispatch(getCountryData('USA'));
  // };

  return (
    <div>
      <h1>Home Page</h1>
      {newState.map((item) => (
        <div key={uuidv4()}>
          <Link to="/details">
            <button
              onClick={() => {
                store.dispatch(getCountryData(item.Country_text));
              }}
              type="button"
            >
              {item.Country_text}
            </button>
            <p>
              - New case :
              {item['New Deaths_text'] === ''
                ? 0
                : item['New Deaths_text']}
            </p>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Home;
