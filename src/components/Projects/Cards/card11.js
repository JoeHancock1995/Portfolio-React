//covid 19 project

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Triviathumbnail from './image/triviathumbnail.png';

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
                    // image={Triviathumbnail}
                />
                <CardContent>
                    <h2>
                       COVID-19 Charts
          </h2>
                    <p>An app displaying charts of COVID-19 cases and deaths in the United States in addition to a chart displaying
                        the cases in Texas cities. The Texas cities chart uses the greater metropoliton area and adds up the necessary counties. </p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href=" ">
                        View Source Code
          </a>
                </Button>
                <Button size="small" color="primary">
                    <a href=" ">
                        Open in Browser
          </a>
                </Button>
            </CardActions>
        </Card>
    );
}