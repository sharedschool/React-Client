import React from 'react';
import { Modal, Button, Form, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { querystring } from './query';

export class LoginBtn extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			show: false,
			isLoading: false,
			email: "",
			password: ""
		};
	}

	componentDidMount(){
		if (querystring("login") === 1) this.handleShow();
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
		this.setState({ isLoading: true });
		try {
			await Auth.signIn(this.state.email, this.state.password);
			this.props.userHasAuthenticated(true);
			this.props.history.push("/portal/");
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	}

	render() {
		return (
			<>
				<Button variant="outline-light" className="nav-btn" onClick={this.handleShow}>
					Log in
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title as="h5">Log in to your SharedSchool account</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{textAlign:'center'}}>
						<div className="login-form">
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="email">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email address"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Button type="submit" variant="primary">Log in</Button>
							</Form>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export class SignupBtn extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.renderForm = this.renderForm.bind(this);
		this.renderConfirmation = this.renderConfirmation.bind(this);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.validate = this.validate.bind(this);

		this.state = {
			show: false,
			isLoading: false,
			email: "",
			password: "",
			password2: "",
			code: "",
			position: "",
			fullname: "",
			newUser: null,
			confirmationCode: ""
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

	validate(){
		return (
			this.state.email.length > 0 && this.state.fullname.length > 0 &&
			this.state.password.length > 0 && this.state.password == this.state.password2 &&
			this.state.code.length == 6
		)
	}

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({ isLoading: true });
		try {
			const newUser = await Auth.signUp({
				username: this.state.email,
				password: this.state.password
			});
			this.setState({
				newUser
			});
		} catch (e) {
			alert(e.message);
		}
		this.setState({ isLoading: false });
	}

	async handleConfirm(event) {
		event.preventDefault();
		this.setState({ isLoading: true });
		try {
			await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
			await Auth.signIn(this.state.email, this.state.password);
			this.props.userHasAuthenticated(true);
			// TODO: Put the other profile data into AWS database
			this.props.history.push("/portal/?new=1");
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
	}

	renderForm(){
		const msg = (
			<Popover>
				This is the code ID for your school. Contact your administrator if you do not know what your code is. If your school is not on the SharedSchool platform, wait for your administration to request a demo.
			</Popover>
		);
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="fullname">
					<Form.Label>Full Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="e.g. John Doe"
						value={this.state.fullname}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email address (preferably institution)</Form.Label>
					<Form.Control
						type="email"
						placeholder="e.g. jdoe@school.org"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="code">
					<Form.Label>
						School Code
						<OverlayTrigger trigger="hover" placement="bottom" overlay={msg}>
							<Button variant="link">
								?
							</Button>
						</OverlayTrigger>
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="e.g. FJ6KX1"
						value={this.state.code}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="position">
					<Form.Label>Position</Form.Label>
					<Form.Control
						type="text"
						placeholder="e.g. Business Administrator or Chemistry Teacher"
						value={this.state.position}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="password2">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={this.state.password2}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Button type="submit" variant="primary" disabled={!this.validate()}>Sign up</Button>
			</Form>
		);
	}

	renderConfirmation(){
		return (
			<Form onSubmit={this.handleConfirm}>
				<p>Check your email for your confirmation code</p>
				<Form.Group controlId="confirmationCode">
					<Form.Label>Confirmation Code</Form.Label>
					<Form.Control
						autoFocus
						type="tel"
						value={this.state.confirmationCode}
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Button type="submit" variant="primary" disabled={this.state.confirmationCode.length === 0}>Sign up</Button>
			</Form>
		);
	}

	render() {
		return (
			<>
				<Button variant="outline-light" className="nav-btn" onClick={this.handleShow}>
					Sign up
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title as="h5">Sign Up for SharedSchool</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{textAlign:'center'}}>
						<div className="signup-form signup-admin">
							{this.state.newUser == null ? this.renderForm() : this.renderConfirmation()}
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

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

	componentDidMount() {
		if (querystring("login") === 1) this.handleShow();
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
		this.setState({ isLoading: true });
		try {
			await Auth.signIn(this.state.email, this.state.password);
			this.props.userHasAuthenticated(true);
			this.props.history.push("/portal/");
		} catch (e) {
			alert(e.message);
			this.setState({ isLoading: false });
		}
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
								<Button type="submit" variant="primary">Log in</Button>
							</Form>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}