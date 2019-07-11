import React from 'react';
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { LoginBtn, SignupBtn } from "./modals";

export function MyNavBar(){
  return (
<Navbar variant="dark" className="blue" expand="lg" sticky="top">
  <Navbar.Brand href="/">
    <img src="/img/logo_text.png" height="40" className="d-inline-block align-top" alt="SharedSchool" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavDropdown title="PLATFORM" id="platform-dropdown">
        <NavDropdown.Item href="/platform/">Platform Overview</NavDropdown.Item>
        <NavDropdown.Item href="/uses/">Use Cases</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="RESOURCES" id="resources-dropdown">
        <NavDropdown.Item href="/blog/">Blog</NavDropdown.Item>
        <NavDropdown.Item href="/faq/">FAQ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="COMPANY" id="company-dropdown">
        <NavDropdown.Item href="/about/">About Us</NavDropdown.Item>
        <NavDropdown.Item href="/contact/">Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div style={{width:'30px'}}></div>
    <Form inline className="my-2 my-lg-0">
      <LoginBtn />
      <SignupBtn />
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export function MyFooter(){
  return <h2>Footer</h2>;
}
