import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import lirithumbnail from './image/lirithumbnail.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 40,
    marginTop: 40,
  },
  media: {
    height: 60,
    width: 400,
    border: '5px outset white',
    },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={lirithumbnail}
        />
        <CardContent>
          <h2>
            Liri App
          </h2>
          <p>
          LIRI acts like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface,
           LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line app which
            returns data from the Bands in Town, Spotify and OMDB APIs.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/liri-node-app">
            View Source Code
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}