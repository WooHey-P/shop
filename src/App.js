import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [shoes, setShoes] = useState(data);

  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Link</Nav.Link>
            <Nav.Link href="#features">Link</Nav.Link>
            <Nav.Link href="#pricing">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg">
      </div>

      <div className='container'>
          <div className='row'>
            {
              shoes.map((item, idx) => {
                return <Shoe item={shoes[idx]} idx={idx} />
              })
            }
          </div>
        </div>
    </div>
  );
}

function Shoe(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.idx + 1) + '.jpg'} width='100%' />
      <h4>{props.item.name}</h4>
      <p>{props.item.content} & {props.item.price}</p>
    </div>
  )
}

export default App;
