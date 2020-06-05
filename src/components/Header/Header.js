import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import Logo from './vectors/logo.png';
// import linkedin from './vectors/linkedin-6-48.png';
// import github from './vectors/github-10-48.png';

const Header = (props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg justify-content-between">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item linkstr">
                <Link className="Name-link" to="/">Joe Hancock</Link>
            </li>
        </ul>
        {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item linkstr">
                <Link className="Nav-link" to="/Plume">Plume</Link>
            </li>
        </ul> */}
    </nav>
</div>
  );
}
export default Header;