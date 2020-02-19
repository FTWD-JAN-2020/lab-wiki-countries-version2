import React from 'react';
// import logo from './logo.svg';
import './App.css';
// new imports
import {Switch, Route} from 'react-router-dom';
import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import RandomComponent from './components/RandomComponent';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <div className="row">

          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
{/* 
          <ul>
            <li><Link to="/scary/scaryMovie1">RandomComponent</Link></li>
            <li><Link to="/scary/scaryMovie2">RandomComponent</Link></li>
            <li><Link to="/scary/scaryMovie3">RandomComponent</Link></li>
          </ul> */}
          
        
        

          <Switch>
            <Route
              exact
              path="/countries/:cca3"
              render={props => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
            {/* <Route
              exact
              path="/scary/:titleName"
              render={props => (
                <RandomComponent {...props} />
              )}
            /> */}
          </Switch>

        </div>
      </div>
    </div>
  );
}
export default App;