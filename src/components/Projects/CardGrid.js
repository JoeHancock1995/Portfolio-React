import React from 'react';
import { Grid } from '@material-ui/core';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';
import Card5 from './Cards/Card5';
import Card6 from './Cards/Card6';
import Card7 from './Cards/Card7';
import Card8 from './Cards/Card8';
import Card9 from './Cards/Card9';
import Card10 from './Cards/card10';

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
    <Grid item xs ={4}>
        <Card10/>
    </Grid>
</Grid>
