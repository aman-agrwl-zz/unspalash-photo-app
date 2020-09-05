import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import ImageContainer from './Containers/ImageContainer/ImageContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Logintbygoogle from './Logintbygoogle'
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
       <Router> 
       <Switch>    
          <Route exact path='/' component={Logintbygoogle} ></Route>    
          <Route path='/Dashboard' component={Dashboard} ></Route>     
        </Switch>      
        <Search />
        <ImageContainer/>
      </Router>
    </div>
  );
}

export default App;
