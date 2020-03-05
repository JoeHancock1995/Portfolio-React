import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import sendcodes1 from './image/sendcodes2.png';

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
          image={sendcodes1}
        />
        <CardContent>
          <h2>
            Send Codes
          </h2>
          <p>
          A project for web developers to acces templates and code snippets to facilitate learning.
          Send-Codes is built to simplify boilerplates and access useful commands in a simple straight forward manner.
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://github.com/JoeHancock1995/send-codes">
            View Source Code
        </a>
        </Button>
        <Button size="small" color="primary">
        <a href="https://send-codes.herokuapp.com/">
            Open in Browser
        </a>
        </Button>
      </CardActions>
    </Card>
  );
}