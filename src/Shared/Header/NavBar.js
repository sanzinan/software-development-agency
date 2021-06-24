import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser);
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" style={{background:'rgba(117, 174, 255,.9)'}} className='shadow p-3 rounded'>
      <div className="container">
        <Navbar.Brand as={Link} to ='/'>
          <h2 className='m-0 font-monospace border-1'>Softonic Solution</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>
            {
              loggedInUser.email? <Nav.Link className='text-white' as={Link} to="/login">{loggedInUser.displayName || loggedInUser.email}</Nav.Link> : <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
