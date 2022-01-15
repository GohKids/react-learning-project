import MainMenu from './Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataContext from '../data/DataContext';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() { 
  const title = "My App";
  const arrMenu = [
    {name:"menu1",link:"/"},
    {name:"menu2",link:"/page2"},
    {name:"menu3",link:"/page3"}
  ];
  return (
    <DataContext.Provider value={
      [
        {income: 50000,expens: 3000},
        {income: 60000,expens: 5000}
      ]
    }>
      <BrowserRouter>
        <Container>
          <Row>
            <Col lg="12"><h1>{title}</h1></Col>
            <Col lg="12"><MainMenu textOfA="aa" menus={arrMenu}/></Col>
            {/* <Col>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/page2">Page2</Link>
                </li>
                <li>
                  <Link to="/page3">Page3</Link>
                </li>
              </ul>
            </Col> */}
          </Row>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Page1/>}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3" element={<Page3/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </DataContext.Provider>
    
  );
}

export default App;
