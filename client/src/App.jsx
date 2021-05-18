import React from 'react';
import Form from './components/Form';
import WeightList from './components/WeightList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onWeightSubmit = (e) => {
    e.preventDefault();
    const weight = e.target[0].value;
    const time = new Date();
  }

  render() {
    return (
      <div>
        <Form onWeightSubmit={this.onWeightSubmit} />
        <WeightList />
      </div>
    );
  }
}

export default App;
