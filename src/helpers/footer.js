import React from 'react';
import { Row, Col, Nav } from "react-bootstrap";
import { DemoBtn } from './demo';

export function MyFooter(){
  return (
    <div class="footer blue">
      <Row className="justify-content-center">
        <Col md="10" className="text-center">
          <div class="break"></div>
          <h3 class="display-4 text-center" style={{fontSize:'32px'}}>Ready to take advantage of your surplus?</h3>
          <div class="break"></div>
          <DemoBtn />
          <div class="break"></div>
          <hr style={{border: '1px solid #6d88de'}} />
        </Col>
      </Row>
      <Row className="justify-content-left">
        <Col md="2">
          <Nav className="flex-column">
            <Nav.Link href="#" className="active">Platform</Nav.Link>
            <Nav.Link href="/platform/">Platform Overview</Nav.Link>
            <Nav.Link href="/uses/">Use Cases</Nav.Link>
          </Nav>
        </Col>
        <Col md="2">
          <Nav className="flex-column">
            <Nav.Link href="#" className="active">Resources</Nav.Link>
            <Nav.Link href="/blog/">Blog</Nav.Link>
            <Nav.Link href="/faq/">FAQ</Nav.Link>
          </Nav>
        </Col>
        <Col md="2">
          <Nav className="flex-column">
            <Nav.Link href="#" className="active">Company</Nav.Link>
            <Nav.Link href="/about/">About Us</Nav.Link>
            <Nav.Link href="/contact/">Contact Us</Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="break"></div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <img src="/img/logo_icon.png" height="100" />
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          &copy; 2019 SharedSchool, LLC. All rights reserved. Privacy Policy.
          <a href="https://www.linkedin.com/company/sharedschool" target="_blank">
            <img src="/img/linkedin.png" height="24px" style={{borderRadius:'100%'}} />
          </a>
          <a href="https://www.facebook.com/SharedSchool/" target="_blank">
            <img src="/img/facebook.png" height="24px" style={{borderRadius:'100%'}} />
          </a>
          <a href="https://www.instagram.com/sharedschoolteam/" target="_blank">
            <img src="/img/instagram.png" height="24px" style={{borderRadius:'100%', backgroundColor: 'white'}} />
          </a>
        </Col>
      </Row>
    </div>
  );
}
