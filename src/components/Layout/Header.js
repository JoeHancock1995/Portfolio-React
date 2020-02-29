import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Layout.css';
import linkedin from './vectors/linkedin-6-48.png';
import github from './vectors/github-10-48.png';

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <AppBar position="static">
      <Toolbar className='header'>
        <h1>Joe Hancock</h1>
          <nav className="vectors">
            <div className="linkedin">
              <a class="active" href="https://www.linkedin.com/in/joe-hancock-7677ab77/"><img src={linkedin} alt="linkedin vector"/></a>
            </div>
            <div className="github">
              <a class="active" href="https://github.com/JoeHancock1995"><img src={github} alt="github vector"/></a>
            </div>
            {/* <div className="email">
                <a class="active" href=mailto: joe.hancock95@gmail.com?subject="HTML link"><p>linkedin</p></a>
            </div> */}
            {/* <div id="MyClockDisplay" class="clock" onload="showTime()"></div> */}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}