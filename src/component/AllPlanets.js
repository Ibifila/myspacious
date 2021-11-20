import React from 'react'
import ShowPlanets from './ShowPlanets'
import planetone from '../assets/images/planet-1.svg'
import planettwo from '../assets/images/planet-2.svg'
import planetthree from '../assets/images/planet-3.svg'
import planetfour from '../assets/images/planet-4.svg'
import planetfive from '../assets/images/planet-5.svg'
import planetsix from '../assets/images/planet-6.svg'
import planetseven from '../assets/images/planet-7.svg'
import planeteight from '../assets/images/planet-8.svg'
import planetnine from '../assets/images/planet-9.svg'
import planetten from '../assets/images/planet-2.svg'
import planeteleven from '../assets/images/planet-5.svg'
import planettwelve from '../assets/images/planet-8.svg'



const AllPlanets = () => {

    const planets = [
        {
            id: 1,
            title: 'Alpha',
            image: planetone,
            pop: 235
        },
        {
            id: 2,
            title: 'Alpha',
            image: planettwo,
            pop: 235
        },
        {
            id: 3,
            title: 'Alpha',
            image: planetthree,
            pop: 235
        },
        {
            id: 4,
            title: 'Alpha',
            image: planetfour,
            pop: 235
        },
        {
            id: 5,
            title: 'Alpha',
            image: planetfive,
            pop: 235
        },
        {
            id: 6,
            title: 'Alpha',
            image: planetsix,
            pop: 235
        },
        {
            id: 7,
            title: 'Alpha',
            image: planetseven,
            pop: 235
        },
        {
            id: 8,
            title: 'Alpha',
            image: planeteight,
            pop: 235
        },
        {
            id: 9,
            title: 'Alpha',
            image: planetnine,
            pop: 235
        },
        {
            id: 10,
            title: 'Alpha',
            image: planetten,
            pop: 235
        },
        {
            id: 11,
            title: 'Alpha',
            image: planeteleven,
            pop: 235
        },
        {
            id: 12,
            title: 'Alpha',
            image: planettwelve,
            pop: 235
        }
    ]

    return (
        <div>
            <div className="d-flex">
            <ShowPlanets planets={planets} />
            
            </div>
            
        </div>
    )
}

export default AllPlanets
