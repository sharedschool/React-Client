import React from 'react';
import { Helmet } from "react-helmet";
import { Row, Col } from "react-bootstrap";
import { Listing } from './helpers/listing';

export class Transactions extends React.Component {
    renderListings() {
        const items = [
            { title: "Chromebook", institution: "WHRHS", category: "Computer", description: "13 inch Acer Chromebook", image: "https://picsum.photos/150?random=1" },
            { title: "Microscope", institution: "WHRHS", category: "Lab Equipment", description: "Solid metal microscope w/light", image: "https://picsum.photos/150?random=2" },
            { title: "Chair", institution: "WHRHS", category: "Furniture", description: "A spinny desk chair", image: "https://picsum.photos/150?random=3" }
        ];
        const { ...item_props } = items[0];
        let els = [];
        for (var i = 0; i < items.length; i++) {
            els.push(<Listing {...item_props} {...items[i]} />);
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