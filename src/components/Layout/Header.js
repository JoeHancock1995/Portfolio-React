import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './Layout.css';
import linkedin from './vectors/linkedin-6-48.png';
import github from './vectors/github-10-48.png';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar >
          <Toolbar className='header'>
            <h1>Joe Hancock</h1>
            <nav>
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
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}