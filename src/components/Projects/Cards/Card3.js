import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import nbadash from './image/nbadash.png';


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
          image={nbadash}
        />
        <CardContent>
          <h2>
            Basketball Dashboard
          </h2>
          <p>
          an app that displays all the NBA teams with recent scores, players, and weather in 
          that city for the following week in a simple and straightforward layout.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/NBAdashboard-Version2-">
            View Source Code
        </a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://joehancock1995.github.io/NBAdashboard-Version2-/">
            Open in Browser
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}