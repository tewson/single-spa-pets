import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () => (
  <Router>
    <h1>Pets!</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/dog">Dog</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={() => <h2>Welcome to Pets!</h2>} />
    <Route exact path="/cat" component={() => "Cat"} />
    <Route exact path="/dog" component={() => "Dog"} />
  </Router>
);
