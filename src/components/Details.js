import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import store from '../redux/configureStore';
import getWorldData from '../redux/API';

const Details = () => {
  const state = useSelector((state) => state.covidData);

  return (
    <div>
      <div className="d-flex">
        <Link to="/">
          <IoIosArrowBack
            onClick={() => {
              store.dispatch(getWorldData(''));
            }}
          />
        </Link>
        <p>country details</p>
        <IoMdMic />
        <IoMdSettings />
      </div>

      <div>
        <p>{state.Country_text}</p>
        <p>{state['Last Update']}</p>
      </div>
      {/* <div>
        {Object.entries(state).map(([key1, value]) => (
          <div key={uuidv4()}>
            <b>{key1}</b>
            <b>{value}</b>
            <span>
              {value}
            </span>
            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </div>
        ))}
      </div> */}
      <div>
        <div className="d-flex justify-content-between">
          <b>New Case</b>
          <div>
            <span>
              {state['New Deaths_text'] === '' ? 0 : state['New Deaths_text']}
            </span>
            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <b>Total Case</b>
          <div>
            <span>{state['Total Cases_text']}</span>
            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <b>Total Death</b>
          <div>
            <span>{state['Total Deaths_text']}</span>
            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <b>Total Recovered</b>
          <div>
            <span>{state['Total Recovered_text']}</span>

            <span>
              <HiOutlineArrowCircleRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
