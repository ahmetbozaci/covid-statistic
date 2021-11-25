/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import { Row, Col } from 'react-bootstrap';
import store from '../redux/configureStore';
import { getWorldData, getCountryData } from '../redux/API';
import './Details.css';

store.dispatch(getWorldData);

const Home = () => {
  const state = useSelector((state) => state.covidData.data);
  const firstItem = Math.floor(Math.random() * state.length + 1);
  const newState = state.slice(firstItem, firstItem + 20);
  return (
    <div className="text-light">
      <div className="d-flex justify-content-between pink p-4">
        <IoIosArrowBack />
        <span>World details</span>
        <div>
          <IoMdMic />
          <IoMdSettings className="ms-3" />
        </div>
      </div>
      <Row className="m-0 pink">
        <Col xs={6} className="p-5 bg-primary" />
        <Col xs={6} className="p-5 fw-bold">
          {' '}
          World
          <p className="fw-normal">6534634</p>
        </Col>
      </Row>
      <div className="pink2 fw-bold p-2">Countries New Case</div>
      <Row className="m-0">
        {newState.map((item) => (
          <Col xs={6} key={uuidv4()} className="country text-end py-2">
            <Link
              to="/details"
              className="text-light text-decoration-none col px-3"
            >
              <span>
                <HiOutlineArrowCircleRight className="fs-4 mb-2" />
              </span>
              <div
                className="mt-5 fs-3 pt-4"
                aria-hidden="true"
                onClick={() => {
                  store.dispatch(getCountryData(`/${item.Country_text}`));
                }}
                type="button"
              >
                {item.Country_text}
                <p className="m-0">
                  {item['New Deaths_text'] === '' ? 0 : item['New Deaths_text']}
                </p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
