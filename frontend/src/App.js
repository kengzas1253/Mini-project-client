import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/login' exact component={Login}/>
      </Switch>

    </Router>
  );
}

export default App;
