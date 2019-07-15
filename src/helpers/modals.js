import React from 'react';
import { Modal, Button, Form, Row, Col, OverlayTrigger, Popover } from "react-bootstrap";
import { Auth } from "aws-amplify";

export class LoginBtn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.querystring = this.querystring.bind(this);

    this.state = {
      show: false,
      isLoading: false,
		  email: "",
		  password: ""
    };
  }

  componentDidMount(){
    if (this.querystring("login") === 1) this.handleShow();
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

  querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
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

    this.handleShow1 = this.handleShow1.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleShow3 = this.handleShow3.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: 0
    };
  }

  handleClose() {
    this.setState({ show: 0 });
  }

  handleShow1() {
    this.setState({ show: 1 });
  }
  handleShow2() {
    this.setState({ show: 2 });
  }
  handleShow3() {
    this.setState({ show: 3 });
  }

  render() {
    const popover1 = (
      <Popover>
        Detailed description of admin accounts coming soon.
      </Popover>
    );
    const popover2 = (
      <Popover>
        Detailed description of user accounts coming soon.
      </Popover>
    );
    const popover3 = (
      <Popover>
        This is the code ID for your school. Contact your administrator if you do not know what your code is.
      </Popover>
    );

    return (
      <>
        <Button variant="outline-light" className="nav-btn" onClick={this.handleShow1}>
          Sign up
        </Button>

        <Modal show={this.state.show === 1 ? true : false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Sign Up for SharedSchool</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:'center'}}>
            <div className="signup-1">
              <Row className="justify-content-center">
                <Col md="4">
                  <OverlayTrigger trigger="hover" placement="bottom" overlay={popover1}>
                    <Button type="button" className="signup-btn signup-admin" onClick={this.handleShow2}>
                      Admin
                    </Button>
                  </OverlayTrigger>
                </Col>
                <Col md="4">
                  <OverlayTrigger trigger="hover" placement="bottom" overlay={popover2}>
                    <Button type="button" className="signup-btn signup-user" onClick={this.handleShow3}>
                      User
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.show === 2 ? true : false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Sign Up for SharedSchool &gt; Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:'center'}}>
            <div className="signup-form signup-admin">
              <Form>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="e.g. John Doe" name="fullname" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address (preferably institution)</Form.Label>
                  <Form.Control type="email" placeholder="e.g. jdoe@school.org" name="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" placeholder="e.g. Business Administrator" name="position" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Institution Name</Form.Label>
                  <Form.Control type="text" placeholder="e.g. Metropolis High School" name="institution" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>School Level</Form.Label>
                  <Form.Control as="select" name="level">
                    <option selected disabled>Select a level</option>
                    <option>Elementary</option>
                    <option>Middle / Junior High</option>
                    <option>High School (9-12)</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>School Type</Form.Label>
                  <Form.Control as="select" name="type">
                    <option selected disabled>Select a type</option>
    								<option>Public</option>
    								<option>Private</option>
    								<option>Charter</option>
    								<option>Boarding</option>
    								<option>Other</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password1" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password2" />
                </Form.Group>
                <Button type="submit" variant="primary">Sign up</Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.show === 3 ? true : false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Sign Up for SharedSchool &gt; User</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:'center'}}>
            <div className="signup-form signup-admin">
              <Form>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="e.g. John Doe" name="fullname" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address (preferably institution)</Form.Label>
                  <Form.Control type="email" placeholder="e.g. jdoe@school.org" name="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    School Code
                    <OverlayTrigger trigger="hover" placement="bottom" overlay={popover3}>
                      <Button variant="link">
                        ?
                      </Button>
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="text" placeholder="e.g. FJ6KX1" name="code" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" placeholder="e.g. Chemistry Teacher" name="position" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password1" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password2" />
                </Form.Group>
                <Button type="submit" variant="primary">Sign up</Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
