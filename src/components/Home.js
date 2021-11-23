import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const Home = () => {
  const state = useSelector((state) => state.covidReducer);
  const firstItem = Math.floor(Math.random() * state.length + 1);
  const newState = state.slice(firstItem, firstItem + 10);
  const handleClick = () => {};

  return (
    <div>
      <h1>Home Page</h1>
      {newState.map((item) => (
        <div key={uuidv4()}>
          <button onClick={handleClick} type="button">
            {item.Country_text}
          </button>
          <p>
            - New case :
            {item['New Deaths_text'] === ''
              ? 0
              : item['New Deaths_text'].replace('+', '')}
          </p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Home;
