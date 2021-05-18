import React from 'react';
import Form from './components/Form';
import WeightList from './components/WeightList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Form />
        <WeightList />
      </div>
    );
  }
}

export default App;
