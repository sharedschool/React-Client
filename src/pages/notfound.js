import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './notfound.css';

export function NotFound(){
  return (
    <div id="page-content" className="notfound-page">
      <Helmet>
        <title>404 Not Found | SharedSchool</title>
      </Helmet>
      <Row className="justify-content-center">
        <Col md="10" className="deadCenter" style={{minHeight: '500px'}}>
          <img src="/img/404-icon.png" height="250" alt="Oops!" style={{borderRadius: '100%'}}/>
          <h1 className="blue-header deadCenter text-center" style={{color:'white'}}>
            Uh oh! We can't find that page.
          </h1>
        </Col>
      </Row>
    </div>
  );
}
