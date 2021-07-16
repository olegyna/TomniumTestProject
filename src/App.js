import React from "react";
import Loader from './components/Loader';
import RatesList from './components/RatesList';
import './App.css';

const data = require('./mock/data.json');
const generatorLists = (obj) => {
  return Object.entries(obj).map((e) => ( { currency: e[0],cost : e[1] } ));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid : false,
      timestamp : 0,
      base : '',
      rates : [],
    }
  }
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    })
  }

  componentDidMount() {
    this.getData().then((value) => {
      const list = generatorLists(value.rates);
      this.setState({
        valid : value.valid,
        timestamp : value.timestamp,
        base : value.base,
        rates: list,
      })
    })
  }

  render() {
    const {timestamp, base, rates} = this.state;
    if(!rates.length){
      return (
          <Loader/>
      );
    }

    return (
        <div className="App">
          <div>
            <label>{`Current date ${new Date(timestamp*1000).toLocaleDateString()}`}  </label>
          </div>
          <div>
            <label>{`Base currency ${base}`}  </label>
          </div>
          <RatesList rates={rates}/>
        </div>
    );
  }
}

export default App;
