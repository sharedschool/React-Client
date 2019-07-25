import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

export class AddListingBtn extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			show: false,
			isLoading: false,
			title: "",
			institution: "",
			category: "",
			description: ""
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
		// TODO
	}

	render() {
		return (
			<>
				<Button variant="primary" size="md" className="green-btn" onClick={this.handleShow}>
					Add new Listing
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title as="h5">Add a Listing</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ textAlign: 'center' }}>
						<div className="login-form">
							<Form/*  onSubmit={this.handleSubmit} */>
								<Form.Group controlId="title">
									<Form.Label>Title</Form.Label>
									<Form.Control
										type="text"
										placeholder="Title"
										value={this.state.title}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="institution">
									<Form.Label>Institution</Form.Label>
									<Form.Control
										type="text"
										placeholder="Institution"
										value={this.state.institution}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="category">
									<Form.Label>Category</Form.Label>
									<Form.Control
										type="text"
										placeholder="Category"
										value={this.state.category}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										type="text"
										placeholder="Description"
										value={this.state.description}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Button type="submit" variant="primary">Submit</Button>
							</Form>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
