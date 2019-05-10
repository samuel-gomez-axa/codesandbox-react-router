import React from "react";
import { Link, withRouter } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = props => {
  console.log("MATCH IN HEADER", props);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
