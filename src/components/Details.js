import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import './Style.css';

const Details = () => {
  const state = useSelector((state) => state.covidData.country);

  return (
    <div className="text-light fw-normal fs-5">
      <div className="d-flex justify-content-between pink2 p-4 fs-5 fw-light">
        <Link to="/">
          <IoIosArrowBack
            className="text-light"
          />
        </Link>
        <span>country details</span>
        <div>
          <IoMdMic />
          <IoMdSettings className="ms-3" />
        </div>
      </div>
      <ul className="list-unstyled fw-bold">
        <li className="p-4 py-5 text-end justify-content-end pink ">
          <p>{state.Country_text}</p>
          <span className="fw-light">Last Update</span>
          <p className="fw-light">{state['Last Update']}</p>
        </li>
        <li className="pink3 px-4 py-1 fw-normal">Covid Statistic</li>
        <li className="d-flex justify-content-between p-4 pink">
          <span className="fw-bold">Active Cases</span>
          <div className="fw-normal">
            <span>{state['Active Cases_text']}</span>
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
        <li className="d-flex justify-content-between p-4 pink2">
          <span>New Case</span>
          <div className="fw-normal">
            {state['New Cases_text'] === '' ? 0 : state['New Cases_text']}
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
        <li className="d-flex justify-content-between p-4 pink">
          <span>New Deaths</span>
          <div className="fw-normal">
            {state['New Deaths_text'] === '' ? 0 : state['New Deaths_text']}
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
        <li className="d-flex justify-content-between p-4 pink2">
          <span>Total Case</span>
          <div className="fw-normal">
            {state['Total Cases_text']}
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
        <li className="d-flex justify-content-between p-4 pink">
          <span>Total Death</span>
          <div className="fw-normal">
            {state['Total Deaths_text']}
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
        <li className="d-flex justify-content-between p-4 pink2">
          <span>Total Recovered</span>
          <div className="fw-normal">
            {state['Total Recovered_text']}
            <HiOutlineArrowCircleRight className="ms-3" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Details;
