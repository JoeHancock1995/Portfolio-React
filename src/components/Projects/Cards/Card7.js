import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import giphythumbnail from './image/giphythumbnail.png';


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
          image={giphythumbnail}
        />
        <CardContent>
          <h2>
            Giphy Glitch
          </h2>
          <p>
          Simple project with several buttons located on it. The page will search 10 gifs from GIPHY using AJAX and display them as static images unless clicked in which they will play.
           User may add searchable button to find more GIFs
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/Giphy">
            View Source Code
        </a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://joehancock1995.github.io/Giphy/">
            Open in Browser
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}