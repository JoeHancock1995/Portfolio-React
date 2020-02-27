import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import './Layout.css';


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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item linkstr">
                   <h5>Github</h5>
                </li>
                <li className="nav-item linkstr">
                   <h5>LinkedIn</h5>
                </li>
                <li className="nav-item linkstr">
                   <h5>Contact Me</h5>
                </li>
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}