import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Piyush's Blog
            </Link>

          </Navbar.Brand>

          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Button type='button' bg="light" variant="light">

            <Link to="/add-blog" style={{ textDecoration: 'none' }}>
              New Post
            </Link>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>

  )
}

export default Header;




