import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const { forecastDays, timezoneOffset, onDayClicked } = this.props;
    return (
      <div className="weather-list flex-parent">
        { forecastDays.map((forecastDay, index) =>
          <WeatherListItem key={forecastDay.dt}
          forecastDay={forecastDay} index={index} 
          timezoneOffset={timezoneOffset} onDayClicked={onDayClicked}
          />
        ) }
      </div>
    );
  }

}

export default WeatherList;

/*
//import logo from '..reportWebVitals';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

*/
