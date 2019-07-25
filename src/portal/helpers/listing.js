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
				<p><b>Title:</b> {this.props.title}</p>
				<p><b>Institution:</b> {this.props.institution}</p>
				<p><b>Category:</b> {this.props.category}</p>
				<p><b>Description:</b> {this.props.description}</p>
				</Col>
			</Row>
		);
	}
}
