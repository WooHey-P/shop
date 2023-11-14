import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Link, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import Home from './Home.js';
import { Event, EventOne, EventTwo } from './Event.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg">
      </div>
    
      <Routes>
        <Route path='/' element={ <Home shoes={shoes} /> } />
        <Route path='/detail/:id/:name' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버 페이지양</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<EventOne />} />
          <Route path='two' element={<EventTwo/>} />
        </Route>
      </Routes>


    </div>
  );
}

function About(props) {
  return (
    <div className="App">
      <h2>소개 페이지</h2>
      <Outlet />
    </div>
  );
}


export default App;
