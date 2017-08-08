import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.container}>
    <h2>H</h2>
  </div>
);

const Calculator = () => (
  <div style={styles.container}>
    <h2>Calculator</h2>
  </div>
);

const Converter = () => (
  <div>
    <h2>Conversions</h2>
  </div>
);

const styles = {
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 400,
    minHeight:400,
    borderWidth:2,
    borderColor:'black',
  },
};


/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);
*/

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/converter">Converter</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/calculator" component={Calculator}/>
      <Route path="/converter" component={Converter}/>
    </div>
  </Router>
);

export default App;
