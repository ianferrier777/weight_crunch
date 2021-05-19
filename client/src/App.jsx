import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import WeightList from './components/WeightList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weightList: [],
      getSuccess: true,
      postSuccess: true,
    };
  }

  componentDidMount() {
    this.weightsRequest();
  }

  onWeightSubmit = (e) => {
    e.preventDefault();
    const weight = e.target[0].value;
    const time = new Date().toUTCString();
    const data = { weight, time };
    let { postSuccess } = this.state;
    axios.post('/weight', data)
      .then(() => {
        postSuccess = true;
        this.weightsRequest();
      })
      .catch(() => {
        postSuccess = false;
        this.setState({ postSuccess });
      });
    /* eslint-disable-next-line no-undef */
    document.getElementById('weightForm').reset();
  }

  weightsRequest = () => {
    let { weightList, getSuccess } = this.state;
    const { postSuccess } = this.state;
    axios.get('/weight')
      .then((response) => {
        getSuccess = true;
        weightList = response.data;
        this.setState({ weightList, getSuccess, postSuccess });
      })
      .catch(() => {
        getSuccess = false;
        this.setState({ getSuccess, postSuccess });
      });
  }

  render() {
    const { weightList, getSuccess, postSuccess } = this.state;
    return (
      <div>
        <h1>Weight Crunch</h1>
        <h2>Weight Submit</h2>
        <Form onWeightSubmit={this.onWeightSubmit} />
        <div hidden={postSuccess}>
          That weight value was invalid, please try again. A valid weight is 1lb or greater.
        </div>
        <h2>Weight List</h2>
        <div hidden={getSuccess}>
          An error occurred getting the weight list.
        </div>
        <WeightList weightList={weightList} postSuccess={postSuccess} />
      </div>
    );
  }
}

export default App;
