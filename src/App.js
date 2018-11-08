import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route path="/" component={Movies} exact />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
