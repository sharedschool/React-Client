import React from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './browse.css';
import { querystring } from '../helpers/query';
import * as Filters from './filters';


export class Browse extends React.Component {
	constructor(props){
		super(props);
		this.renderSearch = this.renderSearch.bind(this);
		this.renderHome = this.renderHome.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			query: "",
			price: "",
			location: "",
			subject: "",
			institution: ""
		};
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	renderHome(){
		var style = {
			backgroundImage: "url('/img/browse-landing.png')",
			height: "500px"
		};
		return (
			<>
				<Row className="justify-content-center text-center deadCenter" style={style}>
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col md="12">
								<h1 className="blue-header" style={{color: 'white'}}>Find the educational materials you need.</h1>
							</Col>
						</Row>
						<Row>
							<Col md="12">
								<Form.Group controlId="query">
									<Form.Control
										type="text"
										placeholder="Search for anything"
										value={this.state.query}
										onChange={this.handleChange}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col md="3">
								<Filters.Price value={this.state.price} callback={this.handleChange} />
							</Col>
							<Col md="3">
								<Filters.Location value={this.state.location} callback={this.handleChange} />
							</Col>
							<Col md="3">
								<Filters.Subject value={this.state.subject} callback={this.handleChange} />
							</Col>
							<Col md="3">
								<Filters.Institution value={this.state.institution} callback={this.handleChange} />
							</Col>
						</Row>
					</Form>
				</Row>
			</>
		);
	}
	renderSearch(){
		return (
			<>
				<Row className="justify-content-center text-center deadCenter">
					<p><h1 className="blue-header">Searching...</h1></p>
				</Row>
			</>
		);
	}
	render(){
		return (
			<div id="page-content" className="portal-listings-page">
				<Helmet>
					<title>Browse | SharedSchool</title>
				</Helmet>
				{ querystring("search") || querystring("category") ? this.renderSearch() : this.renderHome() }
			</div>
		);
	}
}
