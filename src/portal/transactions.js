import React from 'react';
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";
import { Transaction } from './helpers/transaction';

export class Transactions extends React.Component {
	renderListings() {
		const items = [
			{ title: "Chromebook", district: "WHRHS", category: "Computer", description: "13 inch Acer Chromebook", image: "https://picsum.photos/150?random=1" },
			{ title: "Microscope", district: "WHRHS", category: "Lab Equipment", description: "Solid metal microscope w/light", image: "https://picsum.photos/150?random=2" },
			{ title: "Chair", district: "WHRHS", category: "Furniture", description: "A spinny desk chair", image: "https://picsum.photos/150?random=3" }
		];
		const trans = [
			{ contact: "James Naryarn", date: "7/2/1986", listing: null},
			{ contact: "James Narayan", date: "7/3/1986", listing: null},
			{ contact: "James Narayanan", date: "7/4/1986", listing: null}
		]
		const { ...item_props } = trans[0];
		let els = [];
		for (var i = 0; i < trans.length; i++) {
			trans[i].listing = items[i];
			els.push(<Transaction {...item_props} {...trans[i]} />);
		}
		return els;
	}

	render() {
		return (
			<div id="page-content" className="portal-wishlist-page">
				<Helmet>
					<title>My Transactions | SharedSchool</title>
				</Helmet>
				<Row className="justify-content-center">
					<Col md="8" className="text-center">
						<h1 className="blue-header">My Transactions</h1>
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
