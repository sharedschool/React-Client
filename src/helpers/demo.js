import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

export class DemoBtn extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.style = props.style ? props.style : {};
    this.classes = props.className ? props.className : "";
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button variant="primary" size="lg" className={`demo-btn green-btn ${this.classes}`} onClick={this.handleShow} style={this.style}>
          Request a Demo
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Request a Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:'center'}}>
            <div className="login-form">
              <Form>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full name" name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Institution</Form.Label>
                  <Form.Control type="text" placeholder="Institution" name="institution" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email address" name="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message (optional)</Form.Label>
                  <Form.Control as="textarea" name="message" rows="3" />
                </Form.Group>
                <Button type="submit" variant="primary">Request Your Demo</Button>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
