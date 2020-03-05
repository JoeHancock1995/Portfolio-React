import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import cardthumbnail from './image/cardthumbnail.png';


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
          image={cardthumbnail}
        />
        <CardContent>
          <h2>
            Card Collecter
          </h2>
          <p>
          Game which generates a random score to reach then assigns a random number to each of the four cards.
           The user wins if they can add up to the number given.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/unit-4-game">
            View Source Code
        </a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://joehancock1995.github.io/unit-4-game/">
            Open in Browser
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}