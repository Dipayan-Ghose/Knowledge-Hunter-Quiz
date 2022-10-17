import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Prog Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to='/' className='linkDesign'>Home</Link>
            <Link to='/topic' className='linkDesign'>Topic</Link>
            <Link to='/statistics' className='linkDesign'>Statistics</Link>
            <Link to='/blog' className='linkDesign'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};

export default Header;


{/* <nav className='navbar '>
<div>
   <h3>Prog Quiz</h3>
</div>
<div className='links'>
   <Link to='/' className='linkDesign'>Home</Link>
   <Link to='/topic' className='linkDesign'>Topic</Link>
   <Link to='/statistics' className='linkDesign'>Statistics</Link>
   <Link to='blog' className='linkDesign'>Blog</Link>
</div>

</nav>     */}