import React from 'react';
import Cardgrid from '../Projects/CardGrid';
import Contact from '../contact/Contact';
import Scene from '../Cube/Scene';

const Home = () => {
    return (
        <div>
            <Scene/>
            <Cardgrid/>
            <Contact/>
        </div>
    )
}
export default Home;