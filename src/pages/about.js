import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './platform.css';
import './about.css';

function ProfilePic(props, context){
	return (
		<Col md="2" className="text-center">
			<img className="profile-pic" src={props.src} alt={props.name}/>
			<h3 className="blue-header">{props.name}</h3>
			<h5 className="gray headline">{props.role}</h5>
		</Col>
	);
}

export class About extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		document.body.classList.add('clearNav');
		window.addEventListener('scroll', this.handleScroll);
	}
	handleScroll(event){
		var scroll_start = event.srcElement.scrollingElement.scrollTop;
		if (scroll_start < 50){
			document.body.classList.add('clearNav');
		} else {
			document.body.classList.remove('clearNav');
		}
	}
	render(){
		document.body.classList.add('platform-page', 'about-page');
		return (
			<div id="page-content">
				<Helmet>
					<title>About Us | SharedSchool</title>
				</Helmet>
				<div className="mb-5 text-center px-2" style={{minHeight: '450px'}}>
					<Row className="justify-content-center">
						<Col md="8">
							<div className="break"></div>
							<div className="break"></div>
							<h4 className="blue-header" style={{color: '#46ffee'}}>HI, WE'RE SHAREDSCHOOL!</h4>
							<div className="break"></div>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col md="7">
							<h1 className="blue-header" style={{color:'white'}}>
								We're a growing team dedicated to connecting schools with a shared economy model.
							</h1>
							<div className="break"></div>
						</Col>
					</Row>
				</div>
				<Row className="justify-content-center row-bottom row-top odd">
					<Col md="6">
						<h1 className="blue-header">Our Vision</h1>
						<div className="break"></div>
						<p className="gray headline">
							To ensure surplus is used to its full potential and to enable easy access to educational materials to all schools.
						</p>
					</Col>
					<Col md="4" className="deadCenter">
						<img src="/img/about-team.png" width="450" alt="Meet the Team" />
					</Col>
				</Row>
				<div className="meet-team">
					<Row className="justify-content-center row-top">
						<Col md="12" className="deadCenter">
							<h1 className="blue-header">Meet the Team</h1>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<ProfilePic src="/img/about-michael.jpeg" name="Michael Rich" role="Co-Founder and Co-CEO" />
						<ProfilePic src="/img/about-neelay.jpeg" name="Neelay Trivedi" role="Co-Founder and Co-CEO" />
						<ProfilePic src="/img/about-prateek.jpeg" name="Prateek Humane" role="CTO" />
						<ProfilePic src="/img/about-peter.jpeg" name="Peter Linder" role="VP of Engineering" />
					</Row>
					<Row className="justify-content-center row-bottom">
						<ProfilePic src="/img/about-rohan.jpeg" name="Rohan Kansagra" role="VP of Business Development" />
						<ProfilePic src="/img/about-james.jpeg" name="James Narayanan" role="Frontend Engineer Intern" />
						<ProfilePic src="/img/about-arjun.jpeg" name="Arjun Singh" role="Sales and Research Intern" />
					</Row>
				</div>
				<div className="meet-team">
					<Row className="justify-content-center row-top odd">
						<Col md="12" className="deadCenter">
							<h1 className="blue-header">Meet the Team</h1>
						</Col>
					</Row>
					<Row className="justify-content-center row-bottom odd">
						<ProfilePic src="/img/about-jonathan.jpeg" name="Jonathan Barcus" role="Oracle Developer" />
						<ProfilePic src="/img/about-sarah.jpeg" name="Sarah Hernholm" role="Founder of WIT" />
					</Row>
				</div>
			</div>
		);
	}
}
