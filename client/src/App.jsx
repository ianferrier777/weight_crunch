import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import WeightList from './components/WeightList';
import Line from './components/Line';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weightList: [],
      chartData: [
        {
          color: 'hsl(204, 25%, 88%)',
          data: [],
        },
      ],
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
    const time = new Date();
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
        weightList = response.data.map((weightObj) => {
          const time = new Date(weightObj.time).toLocaleString();
          const readableWeightObj = {
            weight: weightObj.weight,
            time,
          };
          return readableWeightObj;
        });
        this.setState({ weightList, getSuccess, postSuccess });
      })
      .catch(() => {
        getSuccess = false;
        this.setState({ getSuccess, postSuccess });
      });
  }

  chartFill = () => {
    const { chartData } = this.state;
  }

  render() {
    const { weightList, getSuccess, postSuccess } = this.state;
    return (
      <div>
        <h1>Weight Crunch</h1>
        <div style={{ height: '40vh', width: '50vw' }}>
          <Line />
        </div>
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
