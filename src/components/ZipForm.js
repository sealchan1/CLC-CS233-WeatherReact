import React, { Component } from 'react';

class ZipForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }

  render() {
    return (
      <div className="zip-form">
        <form id="zipForm" onSubmit={this.submitZipCode}>
          <div className="flex-parent">
              <label htmlFor="zipcode">Zip</label>
              <input className="form-control" type="input" id="zipcode" name="zipcode"  value={this.state.zipcode} required onChange={this.inputChanged} />
              <button type="submit" className="btn btn-success"> Get the forcast!</button>
          </div>
        </form>
      </div>
    );
  }

  inputChanged(event) {

    const { value } = event.target;
    this.setState({
      zipcode: value,
    });

  }

  submitZipCode (event) {
    event.preventDefault(); 
    const { zipcode } = this.state;
    const { onSubmit } = this.props; 
    onSubmit(zipcode);
    this.setState( {zipcode : ''} );
  }

}

export default ZipForm;

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
