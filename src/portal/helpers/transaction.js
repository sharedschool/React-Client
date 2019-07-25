import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Listing } from './listing';
import { MsgBtn } from './message';


export class Transaction extends React.Component {
	render(){
		const suffix = (
			<Col md="3">
				<p><b>Contact:</b> {this.props.contact}</p>
				<p>
					<MsgBtn name={this.props.contact} />
				</p>
			</Col>
		);
		const {...keys} = this.props.listing;
		return (
			<Row>
				<Col>
					<Row>
						Date Requested: {this.props.date}
					</Row>
					<Listing {...keys} {...this.props.listing} suffix={suffix} />
				</Col>
			</Row>
		);
	}
}
