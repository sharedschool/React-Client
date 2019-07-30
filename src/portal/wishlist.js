import React from 'react';
import { Helmet } from "react-helmet";
import { Row, Col, Form } from "react-bootstrap";
import { Listing } from './helpers/listing';

export class Wishlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.renderListings = this.renderListings.bind(this);

        this.state = {
            sortby: "recent"
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    renderListings() {
        const items = [
            { title: "Chromebook", district: "WHRHS", category: "Computer", description: "13 inch Acer Chromebook", price: 200,image: "https://picsum.photos/150?random=1" },
            { title: "Microscope", district: "WHRHS", category: "Lab Equipment", description: "Solid metal microscope w/light", price: 50,image: "https://picsum.photos/150?random=2" },
            { title: "Chair", district: "WHRHS", category: "Furniture", description: "A spinny desk chair", price: 20,image: "https://picsum.photos/150?random=3" }
        ];

        function swapItems(a, b) {
            let temp = items[a];
            items[a] = items[b];
            items[b] = temp;
        }

        if (this.state.sortby === "category") {
            for (let i = 0; i < items.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < items.length; j++) {
                    if (items[j].category < items[minIndex].category)
                        minIndex = j;
                }
                if (minIndex !== i)
                    swapItems(i, minIndex);
            }
        }
        else if (this.state.sortby === "alpha") {
            for (let i = 0; i < items.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < items.length; j++) {
                    if (items[j].title < items[minIndex].title)
                        minIndex = j;
                }
                if (minIndex !== i)
                    swapItems(i, minIndex);
            }
        }
        else if (this.state.sortby === "asc") {
            for (let i = 0; i < items.length - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < items.length; j++) {
                    if (items[j].price < items[minIndex].price)
                        minIndex = j;
                }
                if (minIndex !== i)
                    swapItems(i, minIndex);
            }
        }
        else if (this.state.sortby === "desc") {
            for (let i = 0; i < items.length - 1; i++) {
                let maxIndex = i;
                for (let j = i + 1; j < items.length; j++) {
                    if (items[j].price > items[maxIndex].price)
                        maxIndex = j;
                }
                if (maxIndex !== i)
                    swapItems(i, maxIndex);
            }
        }

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
                    <title>My Wishlist | SharedSchool</title>
                </Helmet>
                <Row className="justify-content-center">
                    <Col md="8" className="text-center">
                        <h1 className="blue-header">My Wishlist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12"> {/* This is necessary to get the left and right borders even with the items below */}
                        <Row>
                            <Form onSubmit={this.handleSort}>
                                <Form.Group controlId="sortby" className="mb-0">
                                    <Form.Label className="mr-1">Sort by:</Form.Label>
                                    <Form.Control as="select" onChange={this.handleChange} value={this.state.sortby} style={{ display: 'inline-block', width: '200px' }}>
                                        <option value="recent">Recently added</option>
                                        <option value="category">Category</option>
                                        <option value="alpha">Alphabetical</option>
                                        <option value="asc">Price (Low to High)</option>
                                        <option value="desc">Price (High to Low)</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Row>
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