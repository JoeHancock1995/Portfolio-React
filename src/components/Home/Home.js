import React from 'react';
import Cardgrid from '../Projects/CardGrid';
import About from '../About/About';
import Scene from '../Cube/Scene';

const h1Style = {
    textAlign: 'left',
    fontFamily: 'Crash',
}

const Home = () => {
    return (
        <div>
            <Scene/>
            <About />
            <h1 style={h1Style}>Projects</h1>
            <Cardgrid/>
        </div>
    )
}
export default Home;