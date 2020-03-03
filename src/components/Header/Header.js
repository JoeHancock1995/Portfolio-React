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
        <ul className="navbar-nav ml-auto">
            <li className="nav-item linkstr">
                <Link className="Nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item linkstr">
                <Link className="Nav-link" to="/contact">Contact</Link>
            </li>
            {/* <li>
                <a class="vectors" href="https://www.linkedin.com/in/joe-hancock-7677ab77/"><img src={linkedin} alt="linkedin vector"/></a>
            </li>
            <li>
                <a class="vectors" href="https://github.com/JoeHancock1995"><img src={github} alt="github vector"/></a>
            </li> */}
        </ul>
    </nav>
</div>
  );
}
export default Header;