import React from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './browse.css';
import { querystring } from '../helpers/query';


export class Browse extends React.Component {
	constructor(props){
		super(props);
		this.renderSearch = this.renderSearch.bind(this);
		this.renderHome = this.renderHome.bind(this);
	}
	renderHome(){
		var style = {
			backgroundImage: "url('/img/browse-landing.png')",
			height: "500px"
		};
		return (
			<>
				<Row className="justify-content-center text-center deadCenter" style={style}>
					<p><h1 className="blue-header" style={{color: 'white'}}>Find the educational materials you need.</h1></p>
				</Row>
			</>
		);
	}
	renderSearch(){
		return (
			<>
				<Row className="justify-content-center text-center deadCenter">
					<p><h1 className="blue-header">Searching...</h1></p>
				</Row>
			</>
		);
	}
	render(){
		return (
			<div id="page-content" className="portal-listings-page">
				<Helmet>
					<title>Browse | SharedSchool</title>
				</Helmet>
				{ querystring("search") || querystring("category") ? this.renderSearch() : this.renderHome() }
			</div>
		);
	}
}
