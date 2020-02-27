import React from 'react';
import { Grid } from '@material-ui/core';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';
import Card8 from './Card8';
import Card9 from './Card9';



export default props =>
<Grid container>
    <Grid item xs={4}>
        <Card1/>
    </Grid>
    <Grid item xs={4}>
        <Card2/>
    </Grid>
    <Grid item xs={4}>
        <Card3/>
    </Grid>
    <Grid item xs={4}>
        <Card4/>
    </Grid>
    <Grid item xs={4}>
        <Card5/>
    </Grid>
    <Grid item xs={4}>
        <Card6/>
    </Grid>
    <Grid item xs={4}>
        <Card7/>
    </Grid>
    <Grid item xs={4}>
        <Card8/>
    </Grid>
    <Grid item xs={4}>
        <Card9/>
    </Grid>
</Grid>
