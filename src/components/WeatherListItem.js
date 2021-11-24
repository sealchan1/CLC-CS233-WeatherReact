import React, { Component } from 'react';
import { getDate, getWeekday } from '../utilities/dates';

class WeatherListItem extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  render() {    
    const { forecastDay, timezoneOffset } = this.props;    
    const date = getDate(forecastDay.dt, timezoneOffset);   
    const weekday = getWeekday(date);    
    return (        
      <div className="weather-list-item" onClick={this.onClick}>            
        <h2>{date.getMonth() + 1} / {date.getDate()}</h2><h3>{weekday}</h3>
        <h3>{forecastDay.temp.min.toFixed(1)}&deg;F &#124;
        {forecastDay.temp.max.toFixed(1)}&deg;F</h3>       
      </div>    
    );  
  }

  onClick () {
    const { onDayClicked, index } = this.props;
    onDayClicked(index);
  }

}

export default WeatherListItem;

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
