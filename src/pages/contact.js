import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './contact.css';

export function Contact(){
  return (
    <div id="page-content" className="contact-page">
      <Helmet>
        <title>Contact Us | SharedSchool</title>
      </Helmet>
      <Row className="justify-content-center">
        <Col md="10" className="deadCenter" style={{minHeight: '300px'}}>
          <img src="/img/contact-mail.png" height="100" alt="Email"/>
          <h1 className="blue-header deadCenter text-center" style={{color:'white'}}>
            Don't be a stranger! For all inquiries, reach out to us at
            <a href="mailto:contact@sharedschool.co" className="blue-header" style={{color:'white'}}>contact@sharedschool.co</a>
          </h1>
        </Col>
      </Row>
    </div>
  );
}
