import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import store from '../redux/configureStore';
import getWorldData from '../redux/API';

store.dispatch(getWorldData(''));
const Home = () => {
  const state = useSelector((state) => state.covidData);
  const firstItem = Math.floor(Math.random() * state.length + 1);
  const newState = state.slice(firstItem, firstItem + 10);
  return (
    <div>
      <div className="d-flex justify-content-around">
        <IoIosArrowBack />
        <p>World details</p>
        <div>
          <IoMdMic />
          <IoMdSettings />
        </div>
      </div>
      <div>
        <h3> World </h3>
        {/* <p>{state[0]['Total Cases_text']}</p> */}
      </div>
      <hr />
      {newState.map((item) => (
        <div key={uuidv4()}>
          <Link to="/details">
            <span>
              <HiOutlineArrowCircleRight />
            </span>
            <div
              aria-hidden="true"
              onClick={() => {
                store.dispatch(getWorldData(`/${item.Country_text}`));
              }}
              type="button"
            >
              {item.Country_text}
            </div>
            <p>
              {item['New Deaths_text'] === '' ? 0 : item['New Deaths_text']}
            </p>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
