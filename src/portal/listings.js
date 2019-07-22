import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './listings.css';
import { Listing } from './helpers/listing';


export class Listings extends React.Component {
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.renderListings = this.renderListings.bind(this);

		this.state = {
			sortby: "recent"
		};
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	renderListings(){
		const items = [
			{title: "Chromebook", institution: "WHRHS", category: "Computer", description: "13 inch Acer Chromebook", image: "https://picsum.photos/160"},
			{title: "Microscope", institution: "WHRHS", category: "Lab Equipment", description: "Solid metal microscope w/light", image: "https://picsum.photos/150"},
			{title: "Chair", institution: "WHRHS", category: "Furniture", description: "A spinny desk chair", image: "https://picsum.photos/170"}
		];
		const {...item_props} = items[0];
		let els = [];
		for (var i = 0; i < items.length; i++){
			els.push(<Listing {...item_props} {...items[i]} />);
		}
		return els;
	}

	render(){
		return (
			<div id="page-content" className="portal-listings-page">
				<Helmet>
					<title>My Listings | SharedSchool</title>
				</Helmet>
				<Row className="justify-content-center">
					<Col md="8" className="text-center">
						<h1 className="blue-header">My Listings</h1>
					</Col>
				</Row>
				<Row className="justify-content-left">
					<Col md="4">
						<Form onSubmit={this.handleSort}>
							<Form.Group controlId="sortby">
								<Form.Label>Sort by:</Form.Label>
								<Form.Control as="select" onChange={this.handleChange} value={this.state.sortby} style={{display: 'inline-block', width: '200px'}}>
									<option value="recent">Recently added</option>
									<option value="category">Category</option>
									<option value="alpha">Alphabetical</option>
									<option value="asc">Price (Low to High)</option>
									<option value="desc">Price (High to Low)</option>
								</Form.Control>
							</Form.Group>
						</Form>
					</Col>
					<Col md="3">
						<Button variant="primary" size="md" className="green-btn">Add New Listing</Button>
					</Col>
				</Row>
				<Row className="justify-content-left">
					<Col md="12">
						{this.renderListings()}
					</Col>
				</Row>
			</div>
		);
	}
}
