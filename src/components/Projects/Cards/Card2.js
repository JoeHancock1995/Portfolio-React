import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import repthumbnail from './image/repothumbnail.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 40,
    marginTop: 40,
  },
  media: {
    height: 60,
    width: 400,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={repthumbnail}
        />
        <CardContent>
          <h2>
            Reporganizer
          </h2>
          <p>
          Reporganizer is an easy to use interface for developers to find and sort their Repositories from GitHub. 
          The user can create custom tags, organize, hide repos, etc.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/JoeHancock1995/reporganizer">
              View Source Code
          </a>
        </Button>
        <Button size="small" color="primary">
          <a href="https://reporganizer.herokuapp.com">
              Open in Browser
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}