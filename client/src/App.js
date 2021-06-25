import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/screens/Home';
import History from './components/screens/History';


const Routing = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/history">
        <History />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>

  );
}

export default App;
