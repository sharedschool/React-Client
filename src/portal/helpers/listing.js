import React from 'react';
import { Row, Col } from "react-bootstrap";
import './listing.css';


export class Listing extends React.Component {
  render(){
    return (
      <Row className="listing justify-content-left">
        <Col md="2">
          <img src={this.props.image} alt={this.props.title} height="150"/>
        </Col>
        <Col md="6">
        <p>Title: {this.props.title}</p>
        <p>Institution: {this.props.institution}</p>
        <p>Category: {this.props.category}</p>
        <p>Description: {this.props.description}</p>
        </Col>
      </Row>
    );
  }
}
