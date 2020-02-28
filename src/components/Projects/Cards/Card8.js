import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lirithumbnail from './image/lirithumbnail.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 40,
    marginTop: 40,
  },
  media: {
    height: 140,
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
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Liri App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          LIRI acts like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface,
           LIRI is a Language Interpretation and Recognition Interface. LIRI is be a command line node app which
            uses the axios package to send requests to the Bands in Town, Spotify and OMDB APIs gives back data.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            View Source Code
        </Button>
      </CardActions>
    </Card>
  );
}