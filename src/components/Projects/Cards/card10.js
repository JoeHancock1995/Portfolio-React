import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CLIwgthumbnail from './image/CLIwg.png';
import '../../../fonts/stylesheet.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 40,
    marginTop: 40,
    fontFamily: 'Ticketing',
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
          image={CLIwgthumbnail}
        />
        <CardContent>
          <h2>
            Command Line Word Guess
          </h2>
          <p>
          This app is a word guessing game like hangman but within the command line.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/JoeHancock1995/Constructor-Word-Guess">
              View Source Code
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}