import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './home.css';
import { DemoBtn } from '../helpers/demo';

export function Home(){
	return (
		<div id="page-content" className="home-page">
			<Helmet>
				<title>Home | SharedSchool</title>
			</Helmet>
			<Row className="justify-content-center">
				<Col md="5" className="deadCenter text-center text-md-left">
					<h1 className="blue-header">Make use of your school's surplus</h1>
					<p className="gray headline">
						Modern EdTech platform that directly connects schools to each other based on your needs and surplus. Scale your surplus and find the educational resources you need!
					</p>
					<DemoBtn className="align-self-md-baseline" />
				</Col>
				<Col md="6" className="deadCenter">
					<img className="img-fluid" src="/img/home-1.png" width="550" alt="Man with Clipboard"/>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md="5" className="deadCenter text-center text-md-left">
					<h1 className="blue-header">See how SharedSchool works for your school</h1>
					<p className="gray headline">
						Empowering public and private schools through a shared economy model.
					</p>
					<DemoBtn className="align-self-md-baseline mb-3 mb-md-0" />
				</Col>
				<Col md="6" className="deadCenter">
					<Row className="justify-content-center">
						<Col>
							<img src="/img/home-social.png" className="for-icon" alt="Social Good"/>
							<h6 className="gray">FOR</h6>
							<h5 className="blue-header">Social Good</h5>
							<p className="gray for-p">
								Directly help other schools obtain necessary educational materials from your surplus.
							</p>
						</Col>
						<Col>
							<img src="/img/home-revenue.png" className="for-icon" alt="Generating Revenue"/>
							<h6 className="gray">FOR</h6>
							<h5 className="blue-header">Generating Revenue</h5>
							<p className="gray for-p">
								Generate revenue for your school through our buy/sell or rent feature.
							</p>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col>
							<img src="/img/home-resources.png" className="for-icon" alt="Acquiring Resources"/>
							<h6 className="gray">FOR</h6>
							<h5 className="blue-header">Acquiring Resources</h5>
							<p className="gray for-p">
								Find the specialized educational materials you need for your school.
							</p>
						</Col>
						<Col>
							<img src="/img/home-space.png" className="for-icon" alt="Freeing Up Space"/>
							<h6 className="gray">FOR</h6>
							<h5 className="blue-header">Freeing Up Space</h5>
							<p className="gray for-p">
								Quickly free up storage for your school using our easy and flexible platform.
							</p>
						</Col>
					</Row>
				</Col>
			</Row>
			<div className="deadCenter">
				<Row className="justify-content-center">
					<Col><h1 className="blue-header mb-3">The SharedSchool Process</h1></Col>
				</Row>
				<Row className="justify-content-center process">
					<Col>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<img src="/img/home-identify.png" alt="Identify"/>
						<h6>Identify</h6>
						<p>Find excess materials you don't need.</p>
					</Col>
					<Col>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<img src="/img/home-list.png" alt="List"/>
						<h6>List</h6>
						<p>Directly input your product details online or with our mobile app.</p>
					</Col>
					<Col>
						<img src="/img/home-match.png" alt="Match"/>
						<h6>Match</h6>
						<p>Connect directly with schools who are in need of your products.</p>
					</Col>
					<Col>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<img src="/img/home-connect.png" alt="Connect"/>
						<h6>Connect</h6>
						<p>Discuss potential transactions with the school you have been matched with.</p>
					</Col>
					<Col>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<div className="break d-none d-md-block"></div>
						<img src="/img/home-complete.png" alt="Complete"/>
						<h6>Complete</h6>
						<p>Finalize details and decide on shipment method.</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}
