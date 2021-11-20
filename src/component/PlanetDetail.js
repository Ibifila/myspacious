import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BsPlusLg } from "react-icons/bs";
import character1 from '../assets/images/character-1.png'
import character2 from '../assets/images/character-2.png'
import character3 from '../assets/images/character-3.png'
import character4 from '../assets/images/character-4.png'
import character5 from '../assets/images/character-5.png'
import character6 from '../assets/images/character-6.png'
import character7 from '../assets/images/character-7.png'
import character8 from '../assets/images/character-8.png'
import character9 from '../assets/images/character-9.png'

const PlanetDetail = ({showDetails, handleClose}) => {
    const characters = [
        {
            id: 1,
            name: 'Darlene Robertson',
            image: character1,
            friends: 23
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            image: character2,
            friends: 23
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            image: character3,
            friends: 23
        },
        {
            id: 4,
            name: 'Guy Hawkins',
            image: character4,
            friends: 23
        },
        {
            id: 5,
            name: 'Arlene McCoy',
            image: character5,
            friends: 23
        },
        {
            id: 6,
            name: 'Jerome Bell',
            image: character6,
            friends: 23
        },
        {
            id: 7,
            name: 'Brooklyn Simmons',
            image: character7,
            friends: 23
        },
        {
            id: 8,
            name: 'Kristin Watson',
            image: character8,
            friends: 23
        },
        {
            id: 9,
            name: 'Eleanor Pena',
            image: character9,
            friends: 23
        }
    ]

    const xtercontent = characters.map( modxter => (
        <div className="mx-1 my-1 plan-mod" key={modxter.id}>
            <div className="d-flex align-items-center">
                <div className="text-center"> 
                    <img src={modxter.image} alt="" className="img-fluid rounded" width="72px" height="72px"/>
                </div>
                <div className="px-2 ">
                    <p className="fs-6 fw-bold">Planet {modxter.name}</p>
                    <p className="fs-6 secondary-color">{modxter.friends} friends</p>
                </div>
            </div>  
        </div>
    ))



return (
    <div>
        <>
            <Modal show={showDetails} onHide={handleClose} animation={false} size="sm" className="modal-w">
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bolder">Planet Alpha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="fs-6 secondary-color">Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>
                    <p className="mb-0 general-text">Population</p>
                    <p>234</p>
                    <div className="d-flex justify-content-between">
                        <p className="secondary-color">CHARACTERS</p>
                        <div className="d-flex align-items-center">
                            <div className="square-border text-center p-1"><BsPlusLg/></div>
                        </div>
                    </div>
                    <>{xtercontent}</>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="dark-btn">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    </div>
    
)
}

export default PlanetDetail
