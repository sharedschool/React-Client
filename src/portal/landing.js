import React from 'react';
import { Row, Col, Button, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { querystring } from '../helpers/query';
import './landing.css';

export class Landing extends React.Component {
	render(){
		return (
			<div id="page-content" className="portal-landing-page">
				<Helmet>
					<title>Portal | SharedSchool</title>
				</Helmet>
				{
					querystring('new') == 1 ?
					<Row className="justify-content-center" style={{paddingTop:'2px', paddingBottom:'0', marginBottom:'-25px'}}>
						<Col md="8">
							<Alert variant="success">
								<Alert.Heading>Welcome to SharedSchool!</Alert.Heading>
								<p>
									This is the Portal, where you can access everything you need to start taking advantage of the platform's features.
								</p>
								<hr />
								<p>
									Below is your Profile, which is what the public sees if they visit your page.
								</p>
							</Alert>
						</Col>
					</Row>
					: <></>
				}
				<Row className="justify-content-center m-3 border rounded">
					<Col>
						<Row className="align-items-center mb-4">
							<img src="https://picsum.photos/200" alt="Profile Picture" className="mr-3"/>
							<Col className="">
								<h2 className="blue-header">John Doe</h2>
								<h3 className="gray headline">District: WHRHS</h3>
								<p className="gray">Account Type: Admin</p>
							</Col>
						</Row>
						<Row>
							<Button variant="primary" size="lg" className="green-btn mr-2">Edit Profile</Button>
							<a href="/portal/listings/"><Button variant="primary" size="lg" className="green-btn">Manage Listings</Button></a>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}
