/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/details">Details</Link>
  </div>
);

export default Navbar;
