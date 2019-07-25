import React from 'react';
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";

export class MyNavbar extends React.Component {

	render(){
		return (
			<Navbar variant="dark" className="blue" expand="lg" sticky="top">
				<Navbar.Brand href="/portal/">
					<img src="/img/logo_text_portal.png" height="40" className="d-inline-block align-top" alt="SharedSchool" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="MANAGE" href="/portal/">
							<NavDropdown.Item href="/portal/listings/">My Listings</NavDropdown.Item>
							<NavDropdown.Item href="/portal/wishlist/">My Wish List</NavDropdown.Item>
							<NavDropdown.Item href="/portal/transactions/">My Transactions</NavDropdown.Item>
							<NavDropdown.Item href="/portal/institutions/">My Institutions</NavDropdown.Item>
						</NavDropdown>
						<Nav.Item>
							<Nav.Link href="/portal/browse/">BROWSE</Nav.Link>
						</Nav.Item>
						<NavDropdown title="RESOURCES">
							<NavDropdown.Item href="/portal/support/">Support</NavDropdown.Item>
							<NavDropdown.Item href="/blog/">Blog</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className="ml-auto">
						<Nav.Item>
							<Nav.Link href="/">HOME</Nav.Link>
						</Nav.Item>
					</Nav>
					<Form inline className="my-2 my-lg-0">
						<Button variant="outline-light" className="nav-btn" onClick={() => this.props.logOut(this.props)}>
							Log Out
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
