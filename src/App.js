import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from './Components/PrivateRoute.jsx';
import history from './helpers/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/login" component={LoginPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
