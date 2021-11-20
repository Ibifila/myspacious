import { BsPlusLg } from "react-icons/bs";
import { useState } from 'react'
import AddPlanet from "./AddPlanet";
import PlanetDetail from "./PlanetDetail";


const ShowPlanets = (props) => {

    const planets = props.planets;

    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const content = planets.map( planet => (
        <div className="bg-light shadow-sm general-radius px-3 py-1 mx-1 my-2 planets-card" key={planet.id} onClick={() => setShowDetails(true)}>
            <a className="text-decoration-none" href='javascript:void(0)' onClick={() => setShowDetails(true)}> 
                <div className="cards-text">
                    <div className="text-center mx-5"> 
                        <img src={planet.image} alt="" className="img-fluid" width="120px" height="120px"/>
                    </div>
                    <h6 className="fw-bold">Planet {planet.title}</h6>
                    <p>Pop: {planet.pop}</p>
                </div>
            </a>
        </div>
    ))

    return (
        <div>
            <div class="d-flex align-items-end flex-wrap  pt-3">
                <>{content}</>
            </div>
            <div className="d-flex justify-content-end mt-n1">
                    <div className="d-flex rounded-circle add-icon" onClick={() => setShow(true)}><BsPlusLg/></div>
            </div>
            <AddPlanet show={show} handleClose={() => setShow(false)}/>
            <PlanetDetail showDetails={showDetails} handleClose={() => setShowDetails(false)}/>
        </div>
    )
}

export default ShowPlanets
