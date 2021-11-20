import React from 'react'
import { BsPlusLg } from "react-icons/bs";
import AddCharacter from './AddCharacter';
import { useState } from 'react'
import CharacterDetail from './CharacterDetail';

const ShowCharacters = (props) => {

    const characters = props.characters;

    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const xtercontent = characters.map( character => (
        <div className="bg-light shadow-sm general-radius  mx-1 my-2 planets-card" key={character.id}>
            <a className="text-decoration-none" href='javascript:void(0)' onClick={() => setShowDetails(true)}> 
                <div className="char-text">
                    <div className="text-center"> 
                        <img src={character.image} alt="" className="img-fluid xter-img" width="272px" height="136px"/>
                    </div>
                    <h6 className="px-3 pt-2 ">{character.name}</h6>
                    <p className="px-3">{character.friends} friends</p>
                </div>
            </a>
        </div>
    ))

    return (
        <div>
            <div class="d-flex flex-wrap  pt-3">
                <>{xtercontent}</>
            </div>
            <div className="d-flex justify-content-end mt-n1">
                    <div className="d-flex rounded-circle add-icon" onClick={() => setShow(true)}><BsPlusLg/></div>
            </div>
            <AddCharacter show={show} handleClose={() => setShow(false)}/>
            <CharacterDetail showDetails={showDetails} handleClose={() => setShowDetails(false)}/>
        </div>
    )
}

export default ShowCharacters
