import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Triviathumbnail from './image/triviathumbnail.png';

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
          image={Triviathumbnail}
        />
        <CardContent>
          <h2>
            Nuclear Trivia
          </h2>
          <p>
          A trivia game about things nuclear weapons related. The user is asked 8 questions in 1 minute then given a score.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/JoeHancock1995/TriviaGame">
              View Source Code
          </a>
        </Button>
        <Button size="small" color="primary">
          <a href="https://joehancock1995.github.io/TriviaGame/">
              Open in Browser
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}