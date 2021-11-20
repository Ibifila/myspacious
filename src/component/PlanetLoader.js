import React from 'react'
import theloader from '../assets/images/planet-loader.svg'

const PlanetLoader = () => {
    return (
        <div className="loader-page bg-light">
            <img src={ theloader } alt="planet loader"/>
        </div>
    )
}

export default PlanetLoader
