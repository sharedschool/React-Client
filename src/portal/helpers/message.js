import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

export class MsgBtn extends React.Component {
	render() {
		return (
			<Button variant="primary" size="md" className="green-btn" onClick={this.handleShow}>
				Contact
			</Button>
		);
	}
}
