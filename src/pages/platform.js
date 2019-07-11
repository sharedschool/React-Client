import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './platform.css';

export class Platform extends React.Component {
  componentDidMount() {
    document.body.classList.add('clearNav');
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event){
    var scroll_start = event.srcElement.body.scrollTop;
    if (scroll_start < 50){
      document.body.classList.add('clearNav');
    } else {
      document.body.classList.remove('clearNav');
    }
  }
  render(){
    document.body.classList.add('platform-page');
    return (
      <div id="page-content">
        <Helmet>
          <title>Platform Overview | SharedSchool</title>
        </Helmet>
        <div className="mb-5 text-center px-2">
          <Row className="justify-content-center">
            <Col md="8">
              <div className="break"></div>
              <div className="break"></div>
              <h4 className="blue-header" style={{color: '#46ffee'}}>SHAREDSCHOOL PLATFORM OVERVIEW</h4>
              <div className="break"></div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="7">
              <h1 className="blue-header" style={{color:'white'}}>
                The EdTech platform enabling schools to find resources and scale surplus
              </h1>
              <div className="break"></div>
            </Col>
          </Row>
        </div>
        <div className="deadCenter">
          <Row className="justify-content-center">
            <Col sm="4">
              <img src="/img/platform-donate.png" style={{background: '#f26661'}} alt="Donate"/>
              <h3>Donate</h3>
            </Col>
            <Col sm="4">
              <img src="/img/platform-buy-sell.png" style={{background: '#f8b449'}} alt="Buy/Sell"/>
              <h3>Buy/Sell</h3>
            </Col>
            <Col sm="4">
              <img src="/img/platform-rent.png" style={{background: '#89cc99'}} alt="Rent"/>
              <h3>Rent</h3>
            </Col>
          </Row>
        </div>
        <Row className="justify-content-center text-center odd">
          <Col className="deadCenter">
            <h3 className="green-header">DONATE</h3>
            <h2 className="blue-header">Build long-term relationships with schools through donations</h2>
            <p className="gray headline w-75">
              Free up space and help primary and secondary schools receive necessary educational materials.
            </p>
            <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center even">
          <Col md="7" className="text-md-left">
            <h3 className="green-header">BUY/SELL</h3>
            <h2 className="blue-header">Make direct transactions between schools with no third party fees</h2>
            <p className="gray headline">
              Buy and sell your educational surplus, find the resources you need at a low price,
              and utilize your surplus to generate revenue.
            </p>
            <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
          </Col>
          <Col md="3" className="deadCenter">
            <img className="img-fluid" src="/img/platform-person.png" width="250" alt="Person"/>
          </Col>
        </Row>
        <Row className="flex-wrap-reverse justify-content-center align-items-center odd">
          <Col md="3" className="deadCenter">
            <img className="img-fluid" src="/img/platform-computer.png" width="150" alt="Computer"/>
          </Col>
          <Col md="7" className="text-md-left">
            <h3 className="green-header">RENT</h3>
            <h2 className="blue-header">Recur revenue with our novel rent feature</h2>
            <p className="gray headline">
              Rent out materials that are only used periodically and provide other schools with affordable resources.
            </p>
            <Button variant="primary" size="lg" className="green-btn">Learn More</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
