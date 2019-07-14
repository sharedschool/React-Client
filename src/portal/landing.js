import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './landing.css';

export class Landing extends React.Component {
  render(){
    return (
      <div id="page-content" className="portal-landing-page">
        <Helmet>
          <title>Portal | SharedSchool</title>
        </Helmet>
        <Row className="justify-content-center">
          <Col md="1" className="text-center">
            <img src="https://picsum.photos/100/100" alt="Profile Picture" />
          </Col>
          <Col md="2" className="text-center">
            <h2 className="blue-header">John Doe</h2>
            <h3 className="gray headline">Institution: WHRHS</h3>
            <p className="gray">Account Type: Admin</p>
          </Col>
          <Col md="2" className="text-center">
            <Button variant="primary" size="lg" className="green-btn">Edit Profile</Button>
          </Col>
          <Col md="3" className="text-center">
            <Button variant="primary" size="lg" className="green-btn">Manage Listings</Button>
          </Col>
          <Col md="2" className="text-center">
            <Button variant="primary" size="lg" className="green-btn">Add Listing</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
