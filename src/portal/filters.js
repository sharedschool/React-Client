import React from 'react';
import { Form } from "react-bootstrap";

export class Price extends React.Component {
	render(){
		return (
			<Form.Group controlId="price">
				<Form.Control
					as="select"
					value={this.props.value}
					onChange={this.props.callback}
				>
					<option value="any">Any price</option>
					<option value="0">$0 to $99</option>
					<option value="100">$100 to $499</option>
					<option value="500">$500 to $999</option>
					<option value="1000">$1000 or greater</option>
				</Form.Control>
			</Form.Group>
		);
	}
}

export class Location extends React.Component {
	render(){
		return (
			<Form.Group controlId="location">
				<Form.Control
					as="select"
					value={this.props.value}
					onChange={this.props.callback}
				>
					<option value="any">Any distance</option>
					<option value="10">Within 10 miles</option>
					<option value="50">Within 50 miles</option>
					<option value="100">Within 100 miles</option>
				</Form.Control>
			</Form.Group>
		);
	}
}

export class Subject extends React.Component {
	render(){
		return (
			<Form.Group controlId="subject">
				<Form.Control
					as="select"
					value={this.props.value}
					onChange={this.props.callback}
				>
					<option value="any">Any subject</option>
					<option>Math</option>
					<option>Science</option>
					<option>English</option>
					<option>History</option>
					<option>Art</option>
				</Form.Control>
			</Form.Group>
		);
	}
}

export class District extends React.Component {
	render(){
		return (
			<Form.Group controlId="district">
				<Form.Control
					as="select"
					value={this.props.value}
					onChange={this.props.callback}
				>
					<option value="any">Any district</option>
					<option>Public</option>
					<option>Private</option>
				</Form.Control>
			</Form.Group>
		);
	}
}
