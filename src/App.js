import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Dashboard from "./Dashboard";
import Stock from "./components/Stock";



const App = () => {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        
        </ul>
      </nav>

      <hr />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route exact path="/stocks" component={Dashboard}/>
      <Route path="/stock/:symbol" component={Stock}/>
      </div>
      </Router>
    );
};

export default App; 

