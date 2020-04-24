import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';
import Admin from './components/Admin';
import ApplyJob from './components/ApplyJob';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/admin' exact component={Admin}/>
        <Route path='/Apply' exact component={ApplyJob}/>
       
      </Switch>

    </Router>
  );
}

export default App;
