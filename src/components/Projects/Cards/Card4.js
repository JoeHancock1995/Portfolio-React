import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import wordthumbnail from './image/wordthumbnail.png';


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
          image={wordthumbnail}
        />
        <CardContent>
          <h2>
            Word Guess Industrial
          </h2>
          <p>
          Game similar to hangman where the user has to try and guess the letters of a generated word.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/Word-guess-game">
            View Source Code
        </a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://joehancock1995.github.io/Word-guess-game/">
            Open in Browser
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}