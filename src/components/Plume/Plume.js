import React from 'react';
import StaticGallery from '../Plume/StaticGallery';
import Tabs from '../Plume/Tabs';
import InteractiveGallery from '../Plume/InteractiveGallery';


const Plume = () => {
    return (
        <div>
            <Tabs/>
            <InteractiveGallery/>
            <StaticGallery/>
        </div>
    )
}
export default Plume;