import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navb from './component/Navb';
import PlanetLoader from './component/PlanetLoader';
import Home from './component/Home';
import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';



function App() {

  const [pageLoading, setPageLoading] = useState(true);
  const [loadContent, setLoadContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoadContent(true); 
      
      setPageLoading(false);
      }, 2000);
  },[])

  return (
    <div className="bg-light pb-5">
      <Router>
        <Container className="app-height">
          <Row className="justify-content-center ps-5">
              <Navb />
              <Switch>
                <Route exact path="/">
                {loadContent && <Home />}
                {pageLoading && <PlanetLoader/>} 
                </Route>
                {/* <Route path="/Characters">
                  <Characters />
                </Route> */}
              </Switch>
          </Row>
        </Container>
    </Router>
    </div>
  );

}

export default App;