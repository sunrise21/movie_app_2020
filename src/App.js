import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {  //상속

  state = {
    count: 0,

  };

  // minus(){
  // this.state.count--;
  // }

  minus = () => {
    this.setState({ count: this.state.count - 1 });

    // console.log('minus');

    // this.state.count = -1;
  }

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('component updated');
  }

  componentWillUnmount(){
    console.log('component will unmount');
  }

  constructor(props) {
    super(props);
    console.log('hello');
  }
  // add(){
  // this.state.count++;
  // }

  add = () => {
    // this.setState({ count: this.state.count + 1});
    // console.log('add');
    this.setState(current => ({
      count: current.count + 1,

    //   function(current: any): {
    //     count: any;
    // }
    })
    )
    // this.state.count = 1;

  }

  render() {
    console.log('im rendering');
    return (
      <div>
        <h5>the number is: {this.state.count} Component</h5>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
