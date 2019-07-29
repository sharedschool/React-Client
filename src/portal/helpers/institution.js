import React from 'react';
import { Row, Col } from "react-bootstrap";

export class Institution extends React.Component {
	render() {
		return (
			<Row className="listing justify-content-left align-items-center">
				<Col sm="4" md="3" lg="2">
					<img src={this.props.image} alt={this.props.name} height="150" />
				</Col>
				<Col sm="6">
					<p><b>Name:</b> {this.props.name}</p>
					<p className="mb-0"><b>Description:</b> {this.props.description}</p>
				</Col>
			</Row>
		);
	}
}