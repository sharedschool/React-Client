import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import './platform.css';

export function Platform(){
  document.body.classList.add('platform-page');
  return (
    <div id="page-content">
      <div class="mb-5 text-center px-2">
        <Row className="justify-content-center">
          <Col md="8">
            <div class="break"></div>
            <div class="break"></div>
            <h4 class="blue-header" style={{color: '#46ffee'}}>SHAREDSCHOOL PLATFORM OVERVIEW</h4>
            <div class="break"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="7">
            <h1 class="blue-header" style={{color:'white'}}>
              The EdTech platform enabling schools to find resources and scale surplus
            </h1>
            <div class="break"></div>
          </Col>
        </Row>
      </div>
      <div class="deadCenter">
        <Row className="justify-content-center">
          <Col sm="4">
            <img src="/img/platform-donate.png" style={{background: '#f26661'}} />
            <h3>Donate</h3>
          </Col>
          <Col sm="4">
            <img src="/img/platform-buy-sell.png" style={{background: '#f8b449'}} />
            <h3>Buy/Sell</h3>
          </Col>
          <Col sm="4">
            <img src="/img/platform-rent.png" style={{background: '#89cc99'}} />
            <h3>Rent</h3>
          </Col>
        </Row>
      </div>
      <Row className="justify-content-center text-center odd">
        <Col className="deadCenter">
          <h3 class="green-header">DONATE</h3>
          <h2 class="blue-header">Build long-term relationships with schools through donations</h2>
          <p class="gray headline w-75">
            Free up space and help primary and secondary schools receive necessary educational materials.
          </p>
          <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center even">
        <Col md="7" className="text-md-left">
          <h3 class="green-header">BUY/SELL</h3>
          <h2 class="blue-header">Make direct transactions between schools with no third party fees</h2>
          <p class="gray headline">
            Buy and sell your educational surplus, find the resources you need at a low price,
            and utilize your surplus to generate revenue.
          </p>
          <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
        </Col>
        <Col md="3" className="deadCenter">
          <img class="img-fluid" src="/img/platform-person.png" width="250" />
        </Col>
      </Row>
      <Row className="flex-wrap-reverse justify-content-center align-items-center odd">
        <Col md="3" className="deadCenter">
          <img class="img-fluid" src="/img/platform-computer.png" width="150" />
        </Col>
        <Col md="7" className="text-md-left">
          <h3 class="green-header">RENT</h3>
          <h2 class="blue-header">Recur revenue with our novel rent feature</h2>
          <p class="gray headline">
            Rent out materials that are only used periodically and provide other schools with affordable resources.
          </p>
          <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
        </Col>
      </Row>
    </div>
  );
}
