import React from 'react';
import PropTypes from 'prop-types'

//      <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]} />

//빈 배열 선언
const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjFfMjkx%2FMDAxNjI0MjU4MTY2NDkx.Tba7EgZm-n1OsyVQaPDRgn-5WA3j1WuZrQ-lFS8p52cg.2DWcr1kUkCWAKCqgng1JBH8cHXcX4yXDKXqsLLS6toQg.JPEG.prosunil%2F20210416%25A3%25DF120958.jpg&type=sc960_832',
    rating: 5,
  },
  {
    id: 2,
    name: 'samgyeopsal',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_06_18_1445%2Fd41ad6ae-cfde-11eb-979b-48df379cca40_01.jpg&type=sc960_832',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjVfMjM4%2FMDAxNjI0NjIxMzM1NTI2.Sh8dkiQR1GSyv9eSsTkOF1IwOyJewW4WPVfJzO3aDN4g.MKyCM9PYvaN7xUF8RpiV6cZZi2BZa_2n_zbZQEkekTYg.JPEG.dbendud1%2F20210624%25A3%25DF102651.jpg&type=sc960_832',
    rating: 4.9,
  },
];

function FoodArr({ name, picture, rating }) {
  return (
    <div>
      {/* <h1>{key}</h1> */}
      <h1> i like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function FoodAllArr(props) {
  return (
    <div>
      <h1>i like {props.name} </h1>
      <img src={props.picture} />
    </div>
  );
}

//App 컴포넌트 정의
function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div className="App">
      {foodILike.map(renderFood)}

      {/* {foodILike.map(dish => (
        <FoodArr name={dish.name} picture={dish.image} />
          
      ))} */}
    </div>
  );

  }

const renderFood1 = dish => <FoodArr name={dish.name} picture={dish.image} />;

function renderFood(dish) {
  return <FoodArr key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}


function Potato() {
  return <h3>i love potato</h3>
}


function Food1({ fav }) {
  return <div> {fav}</div>;
}

FoodArr.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food(props) {
  console.log(props);
  return (
    <div>
      <h4>food food</h4>
      <h4>{props.fav}</h4>
      <h4>{props.papapapa}</h4>
    </div>
  );
}
export default App;
