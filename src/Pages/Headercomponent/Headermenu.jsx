import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Headermenu = () => {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link  to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
            <li className="bar">
              <Link href="/"></Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
}

export default Headermenu
