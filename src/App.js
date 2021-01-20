import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route exact path="/"> 
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
