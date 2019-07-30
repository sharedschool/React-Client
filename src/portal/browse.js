import React from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './browse.css';
import { querystring } from '../helpers/query';
import { Auth } from "aws-amplify";
import * as Filters from './filters';
import { Listing } from './helpers/listing';


export class Browse extends React.Component {
	constructor(props){
		super(props);
		this.renderSearch = this.renderSearch.bind(this);
		this.renderHome = this.renderHome.bind(this);
		this.renderListings = this.renderListings.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			query: "",
			price: "",
			location: "",
			subject: "",
			district: "",
			isLoading: false,
			searched: false,
			sortby: ""
		};
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({ isLoading: true });
		try {
			// await Auth.signIn(this.state.email, this.state.password);
			// this.props.userHasAuthenticated(true);
			// this.props.history.push("/portal/");
			this.setState({ isLoading: false, searched: true });
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	}

	renderHome(){
		var style = {
			backgroundImage: "url('/img/browse-landing.png')",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			height: "500px"
		};
		return (
			<>
				<Row className="justify-content-center text-center deadCenter" style={style}>
					<Form onSubmit={this.handleSubmit}>
						<Row>
							<Col md="12">
								<h1 className="blue-header text-white">Find the educational materials you need.</h1>
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
							<Col sm="6" md="3">
								<Filters.Price value={this.state.price} callback={this.handleChange} />
							</Col>
							<Col sm="6" md="3">
								<Filters.Location value={this.state.location} callback={this.handleChange} />
							</Col>
							<Col sm="6" md="3">
								<Filters.Subject value={this.state.subject} callback={this.handleChange} />
							</Col>
							<Col sm="6" md="3">
								<Filters.District value={this.state.district} callback={this.handleChange} />
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
				{this.state.isLoading ?
					<Row className="justify-content-center text-center deadCenter">
						<p><h1 className="blue-header">Searching...</h1></p>
					</Row>
					:
					<>
						<Row className="pb-0">
							<Col md="12"> {/* This is necessary to get the left and right borders even with the items below */}
								<Row>
									<Form onSubmit={this.handleSort} className="mr-auto ml-auto mr-sm-0">
										<Form.Group controlId="sortby" className="mb-0">
											<Form.Label className="mr-1">Sort by:</Form.Label>
											<Form.Control as="select" onChange={this.handleChange} value={this.state.sortby} style={{ display: 'inline-block', width: '200px' }}>
												<option value="recent">Recently added</option>
												<option value="category">Category</option>
												<option value="alpha">Alphabetical</option>
												<option value="asc">Price (Low to High)</option>
												<option value="desc">Price (High to Low)</option>
											</Form.Control>
										</Form.Group>
									</Form>
								</Row>
							</Col>
						</Row>
						<Row className="px-md-2 px-lg-3 justify-content-center justify-content-sm-left">
							<Col xs="10" sm="6" md="4" lg="3">
								<Form onSubmit={this.handleSubmit}>
									<Row>
										<Col md="12" className="px-lg-1">
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
										<Col xs="12" xl="6" className="px-lg-1">
											<Filters.Price value={this.state.price} callback={this.handleChange} />
										</Col>
										<Col xs="12" xl="6" className="px-lg-1">
											<Filters.Location value={this.state.location} callback={this.handleChange} />
										</Col>
										<Col xs="12" xl="6" className="px-lg-1">
											<Filters.Subject value={this.state.subject} callback={this.handleChange} />
										</Col>
										<Col xs="12" xl="6" className="px-lg-1">
											<Filters.District value={this.state.district} callback={this.handleChange} />
										</Col>
									</Row>
								</Form>
							</Col>
							<Col>{this.renderListings()}</Col>
						</Row>
					</>
				}
			</>
		);
	}
	renderListings() {
		const items = [
			{ title: "Chromebook", district: "WHRHS", category: "Computer", description: "13 inch Acer Chromebook", price: 200, image: "https://picsum.photos/150?random=1" },
			{ title: "Microscope", district: "WHRHS", category: "Lab Equipment", description: "Solid metal microscope w/light", price: 50, image: "https://picsum.photos/150?random=2" },
			{ title: "Chair", district: "WHRHS", category: "Furniture", description: "A spinny desk chair", price: 20, image: "https://picsum.photos/150?random=3" },
			{ title: "Bag", district: "WHRHS", category: "Accessories", description: "A quality leather bag", price: 25, image: "https://picsum.photos/150?random=4" },
			{ title: "Desk", district: "WHRHS", category: "Furniture", description: "A sturdy wooden desk", price: 40, image: "https://picsum.photos/150?random=5" },
			{ title: "Textbook", district: "WHRHS", category: "Books", description: "An informative textbook", price: 10, image: "https://picsum.photos/150?random=6" }
		];

		function swapItems(a, b) {
			let temp = items[a];
			items[a] = items[b];
			items[b] = temp;
		}

		if (this.state.sortby === "category") {
			for (let i = 0; i < items.length - 1; i++) {
				let minIndex = i;
				for (let j = i + 1; j < items.length; j++) {
					if (items[j].category < items[minIndex].category)
						minIndex = j;
				}
				if (minIndex !== i)
					swapItems(i, minIndex);
			}
		}
		else if (this.state.sortby === "alpha") {
			for (let i = 0; i < items.length - 1; i++) {
				let minIndex = i;
				for (let j = i + 1; j < items.length; j++) {
					if (items[j].title < items[minIndex].title)
						minIndex = j;
				}
				if (minIndex !== i)
					swapItems(i, minIndex);
			}
		}
		else if (this.state.sortby === "asc") {
			for (let i = 0; i < items.length - 1; i++) {
				let minIndex = i;
				for (let j = i + 1; j < items.length; j++) {
					if (items[j].price < items[minIndex].price)
						minIndex = j;
				}
				if (minIndex !== i)
					swapItems(i, minIndex);
			}
		}
		else if (this.state.sortby === "desc") {
			for (let i = 0; i < items.length - 1; i++) {
				let maxIndex = i;
				for (let j = i + 1; j < items.length; j++) {
					if (items[j].price > items[maxIndex].price)
						maxIndex = j;
				}
				if (maxIndex !== i)
					swapItems(i, maxIndex);
			}
		}

		const { ...item_props } = items[0];
		let els = [];
		for (var i = 0; i < items.length; i++) {
			els.push(<Listing {...item_props} {...items[i]} />);
		}
		return els;
	}
	render(){
		return (
			<div id="page-content" className="portal-listings-page">
				<Helmet>
					<title>Browse | SharedSchool</title>
				</Helmet>
				{ /* querystring("search") || querystring("category") */ this.state.searched ? this.renderSearch() : this.renderHome() }
			</div>
		);
	}
}
