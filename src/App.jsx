import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import history from "./history";

export default () => (
  <Router history={history}>
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
    <Route
      path="/"
      render={({ location: { pathname } }) => {
        const display = pathname === "/" ? "none" : "block";
        return <div id="spa" style={{ display }} />;
      }}
    />
  </Router>
);
