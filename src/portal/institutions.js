import React from 'react';
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";

export class Institutions extends React.Component {
    renderListings() {
        const Institution = props => {
            return (
                <Row className="listing justify-content-left align-items-center">
                    <Col md="2">
                        <img src={props.image} alt={props.name} height="150"/>
                    </Col>
                    <Col md="6">
                        <p><b>Name:</b> {props.name}</p>
                        <p className="mb-0"><b>Description:</b> {props.description}</p>
                    </Col>
                </Row>
            );
        }

        const items = [
            { name: "WHRHS", description: "A Great High School", image: "https://picsum.photos/150?random=1" },
            { name: "RVCC", description: "A Great College", image: "https://picsum.photos/150?random=2" },
            { name: "Harvard", description: "A university", image: "https://picsum.photos/150?random=3" }
        ];
        const { ...item_props } = items[0];
        let els = [];
        for (var i = 0; i < items.length; i++) {
            els.push(<Institution {...item_props} {...items[i]} />);
        }
        return els;
    }

    render() {
        return (
            <div id="page-content" className="portal-wishlist-page">
                <Helmet>
                    <title>My Institutions | SharedSchool</title>
                </Helmet>
                <Row className="justify-content-center">
                    <Col md="8" className="text-center">
                        <h1 className="blue-header">My Institutions</h1>
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