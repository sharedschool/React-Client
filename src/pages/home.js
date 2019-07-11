import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import './home.css';
import { DemoBtn } from '../helpers/demo';

export function Home(){
  return (
    <div id="page-content" class="home-page">
      <Row className="justify-content-center">
        <Col md="5" className="deadCenter">
          <h1 className="blue-header">Make use of your school's surplus</h1>
          <p className="gray headline">
            Modern EdTech platform that directly connects schools to each other based on your needs and surplus. Scale your surplus and find the educational resources you need!
          </p>
          <DemoBtn style={{alignSelf:'flex-start'}} />
        </Col>
        <Col md="6" className="deadCenter">
          <img className="img-fluid" src="/img/home-1.png" width="550" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="5" className="deadCenter">
          <h1 className="blue-header">See how SharedSchool works for your school</h1>
          <p className="gray headline">
            Empowering public and private schools through a shared economy model.
          </p>
          <DemoBtn style={{alignSelf:'flex-start'}} />
        </Col>
        <Col md="6" className="deadCenter">
          <Row className="justify-content-center">
            <Col>
              <img src="/img/home-social.png" class="for-icon"/>
              <h6 class="gray">FOR</h6>
              <h5 class="blue-header">Social Good</h5>
              <p class="gray for-p">
                Directly help other schools obtain necessary educational materials from your surplus.
              </p>
            </Col>
            <Col>
              <img src="/img/home-revenue.png" class="for-icon"/>
              <h6 class="gray">FOR</h6>
              <h5 class="blue-header">Generating Revenue</h5>
              <p class="gray for-p">
                Generate revenue for your school through our buy/sell or rent feature.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <img src="/img/home-resources.png" class="for-icon"/>
  						<h6 class="gray">FOR</h6>
  						<h5 class="blue-header">Acquiring Resources</h5>
  						<p class="gray for-p">
  							Find the specialized educational materials you need for your school.
  						</p>
            </Col>
            <Col>
              <img src="/img/home-space.png" class="for-icon"/>
  						<h6 class="gray">FOR</h6>
  						<h5 class="blue-header">Freeing Up Space</h5>
  						<p class="gray for-p">
  							Quickly free up storage for your school using our easy and flexible platform.
  						</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div class="deadCenter">
        <Row className="justify-content-center">
          <Col><h1 class="blue-header">The SharedSchool Process</h1></Col>
        </Row>
        <Row className="justify-content-center process">
          <Col>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <img src="/img/home-identify.png" />
    				<h6>Identify</h6>
    				<p>Find excess materials you don't need.</p>
          </Col>
          <Col>
            <div class="break d-none d-md-block"></div>
    				<div class="break d-none d-md-block"></div>
    				<img src="/img/home-list.png" />
    				<h6>List</h6>
    				<p>Directly input your product details online or with our mobile app.</p>
          </Col>
          <Col>
            <img src="/img/home-match.png" />
    				<h6>Match</h6>
    				<p>Connect directly with schools who are in need of your products.</p>
          </Col>
          <Col>
            <div class="break d-none d-md-block"></div>
    				<div class="break d-none d-md-block"></div>
    				<img src="/img/home-connect.png" />
    				<h6>Connect</h6>
    				<p>Discuss potential transactions with the school you have been matched with.</p>
          </Col>
          <Col>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <div class="break d-none d-md-block"></div>
            <img src="/img/home-complete.png" />
            <h6>Complete</h6>
            <p>Finalize details and decide on shipment method.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
