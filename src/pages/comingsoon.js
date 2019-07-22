import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

export function ComingSoon(){
	return (
		<div id="page-content" className="soon-page">
			<Helmet>
				<title>Coming Soon | SharedSchool</title>
			</Helmet>
			<Row className="justify-content-center">
				<Col md="10" className="deadCenter" style={{minHeight: '500px'}}>
					<h1 className="blue-header deadCenter text-center">
						This feature is coming soon.
					</h1>
				</Col>
			</Row>
		</div>
	);
}
