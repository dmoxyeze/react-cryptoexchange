import { Helmet } from 'react-helmet-async';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/views/home/Home';
import './App.css';
import "~slick-carousel/slick/slick.css";
import "~lick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - Porfolio"
        defaultTitle="Porfolio"
      >
        <meta name="description" content='A Personal Side Project Using React' />
      </Helmet>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </ Router>
  );
}

export default App;
