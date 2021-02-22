import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import List from './designation/List';
import Create from './designation/Create';
import EditDesignation from './designation/Edit';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/designation'}> List</Link>
              </li>
              <li>
                <Link to={'/designation/add'}> Create</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path={'/designation'} exact component={List} />
            <Route path={'/designation/add'} exact component={Create} />
            <Route path="/" exact component={List} />
            <Route path={'/designation/edit/:slug'}><EditDesignation/></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;