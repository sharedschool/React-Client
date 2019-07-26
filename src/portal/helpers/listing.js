import React from 'react';
import { Row, Col } from "react-bootstrap";
import './listing.css';


export class Listing extends React.Component {
	render(){
		return (
			<Row className="listing justify-content-left align-items-center">
				<Col md="2">
					<img src={this.props.image} alt={this.props.title} height="150"/>
				</Col>
				<Col md="6">
					<p><b>Title:</b> {this.props.title}</p>
					<p><b>Institution:</b> {this.props.institution}</p>
					<p><b>Category:</b> {this.props.category}</p>
					<p className="mb-0"><b>Description:</b> {this.props.description}</p>
				</Col>
				<Col>
					{this.props.price ? <h1>${this.props.price}</h1> : ""}
				</Col>
        {this.props.suffix}
			</Row>
		);
	}
}
