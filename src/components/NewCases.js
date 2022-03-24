import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { getCountryData } from '../redux/API';

const NewCases = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.covidData.data);

  const handleClick = (countryName) => {
    dispatch(getCountryData(countryName));
  };

  return (
    <div>
      <div className="pink3 fw-bold p-2">New Covid Cases By Countries</div>
      <Row className="m-0">
        {state.map((item) => (
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
                  handleClick(item.Country_text);
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

export default NewCases;
