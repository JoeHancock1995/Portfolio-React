import React from 'react';
import Cardgrid from '../Projects/CardGrid';
import About from '../About/About';
import Scene from '../Cube/Scene';

const Home = () => {
    return (
        <div>
            <About />
            <Scene/>
            <Cardgrid/>
        </div>
    )
}
export default Home;