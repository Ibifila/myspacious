import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import AllPlanets from './AllPlanets';
import AllCharacters from './AllCharacters';



const MainTabs = () => {


    return (
        <div>
            <Tab.Container defaultActiveKey="first">
                <div>
                    <Col>
                        <Nav variant="pills" >
                            <Nav.Item className="mytabs">
                                <Nav.Link eventKey="first">PLANETS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mytabs">
                                <Nav.Link eventKey="second">CHARACTERS</Nav.Link>
                            </Nav.Item>
                            <DropdownButton aria-expanded="false"  title="Planet: All" className="ms-auto mydropdown">
                                <Dropdown.Item href="#/action-1">Planet: All</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Planet Alpha</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Planet Beta</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <AllPlanets />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AllCharacters />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </div>
            </Tab.Container>
        </div>
        
    )
}

export default MainTabs
