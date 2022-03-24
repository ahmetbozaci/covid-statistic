import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { getWorldData } from '../redux/API';
import './Style/Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.covidData.data);
  const worldData = state.slice(0, 1);

  useEffect(() => {
    dispatch(getWorldData);
  }, []);

  return (
    <Row className="m-0 world-map">
      <Col xs={6} className="p-3" />
      <Col xs={6} className="p-3 fw-bolder fs-3">
        <p className="mt-5 text-light">
          WORLD
          <br />
          TOTAL CASE
        </p>
        {worldData.map((item) => (
          <p key={uuidv4()} className="fw-normal mb-5">{item['Total Cases_text']}</p>
        ))}
      </Col>
    </Row>
  );
};
export default Main;
