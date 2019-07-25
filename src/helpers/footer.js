import React from 'react';
import { Row, Col, Nav } from "react-bootstrap";
import { DemoBtn } from './demo';

export function MyFooter(){
	return (
		<div className="footer blue">
			<Row className="justify-content-center">
				<Col md="10" className="text-center">
					<div className="break"></div>
					<h3 className="display-4 text-center" style={{fontSize:'32px'}}>Ready to take advantage of your surplus?</h3>
					<div className="break"></div>
					<DemoBtn />
					<div className="break"></div>
					<hr style={{border: '1px solid #6d88de'}} />
				</Col>
			</Row>
			<Row className="justify-content-left">
				<Col md="2">
					<Nav className="flex-column">
						<Nav.Link href="/platform/" className="active">Platform</Nav.Link>
						<Nav.Link href="/platform/">Platform Overview</Nav.Link>
						<Nav.Link href="/uses/">Use Cases</Nav.Link>
					</Nav>
				</Col>
				<Col md="2">
					<Nav className="flex-column">
						<Nav.Link href="/faq/" className="active">Resources</Nav.Link>
						<Nav.Link href="/faq/">FAQ</Nav.Link>
						<Nav.Link href="/blog/">Blog</Nav.Link>
					</Nav>
				</Col>
				<Col md="2">
					<Nav className="flex-column">
						<Nav.Link href="/about/" className="active">Company</Nav.Link>
						<Nav.Link href="/about/">About Us</Nav.Link>
						<Nav.Link href="/contact/">Contact Us</Nav.Link>
					</Nav>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="break"></div>
				</Col>
			</Row>
			<Row className="justify-content-center text-center">
				<Col>
					<img src="/img/logo_icon.png" height="100" alt="SharedSchool"/>
				</Col>
			</Row>
			<Row className="justify-content-center text-center">
				<Col>
					&copy; 2019 SharedSchool, LLC. All rights reserved. Privacy Policy.
					<a href="https://www.linkedin.com/company/sharedschool" target="_blank" rel="noopener noreferrer">
						<img src="/img/linkedin.png" height="24px" style={{borderRadius:'100%'}} alt="LinkedIn"/>
					</a>
					<a href="https://www.facebook.com/SharedSchool/" target="_blank" rel="noopener noreferrer">
						<img src="/img/facebook.png" height="24px" style={{borderRadius:'100%'}} alt="Facebook"/>
					</a>
					<a href="https://www.instagram.com/sharedschoolteam/" target="_blank" rel="noopener noreferrer">
						<img src="/img/instagram.png" height="24px" style={{borderRadius:'100%', backgroundColor: 'white'}} alt="Instagram"/>
					</a>
				</Col>
			</Row>
		</div>
	);
}
