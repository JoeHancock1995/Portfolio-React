import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wordthumbnail from './image/wordthumbnail.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 40,
    marginTop: 40,
  },
  media: {
    height: 60,
    width: 400,  },
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
          <Typography gutterBottom variant="h5" component="h2">
            Word Guess Industrial
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Game similar to hangman where the user has to try and guess the letters of a generated word.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            View Source Code
        </Button>
        <Button size="small" color="primary">
            Open in Browser
        </Button>
      </CardActions>
    </Card>
  );
}