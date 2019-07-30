import React from 'react';
import { Col, Modal, Button, Form, InputGroup } from "react-bootstrap";

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
			image: undefined,
			title: "",
			district: "",
			category: "",
			description: "",
			price: undefined
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
						<Form onSubmit={this.handleSubmit}>
							<Form.Group controlId="image" className="custom-file mb-2">
								<Form.Label className="custom-file-label">Upload Image</Form.Label>
								<Form.Control
									className="custom-file-input"
									type="file"
									accept="image/*"
									value={this.state.image}
									onChange={this.handleChange}
									/>
							</Form.Group>
							<Form.Row>
								<Col>
									<Form.Group controlId="title">
										<Form.Label>Title</Form.Label>
										<Form.Control
											type="text"
											placeholder="Title"
											value={this.state.title}
											onChange={this.handleChange}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="category">
										<Form.Label>Category</Form.Label>
										<Form.Control
											type="text"
											placeholder="Category"
											value={this.state.category}
											onChange={this.handleChange}
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Group controlId="district">
								<Form.Label>District</Form.Label>
								<Form.Control
									type="text"
									placeholder="District"
									value={this.state.district}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group controlId="description">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									placeholder="Description"
									value={this.state.description}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group controlId="price">
								<Form.Label>Price</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
									</InputGroup.Prepend>	
									<Form.Control
										type="number"
										placeholder="Price"
										min="0"
										value={this.state.price}
										onChange={this.handleChange}
									/>
								</InputGroup>
							</Form.Group>
							<Button type="submit" variant="primary">Submit</Button>
						</Form>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}
