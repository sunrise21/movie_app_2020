import React from 'react';

//      <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]} />

//App 컴포넌트 정의
function App() {
  return (
    <div className="App">
      <h1>hello !!</h1>
      <Potato />
      <Food fav="kimchi"  />
    </div>
  );
}

function Potato() {
  return <h3>i love potato</h3>
}


function Food1({ fav }) {
  return <div> {fav}</div>;
}

function Food(props) {
  console.log(props);
  return (
    <div>
      <h4>food food</h4>
      <h4>{ props.fav }</h4>
      <h4>{ props.papapapa }</h4>
    </div>
  );
}
export default App;
