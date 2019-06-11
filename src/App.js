import React from 'react';
import { Navbar, Container, Card, CardGroup, Form } from 'react-bootstrap';
import './App.css';
import HouseholdCard from './HouseholdCard';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "expense",
        }
    }
    handleSelect(eventKey) {
        console.log(`selected ${eventKey}`);
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Calculator</Navbar.Brand>
                </Navbar>
                <Container id="mainContainer" fluid="true" style={{ marginTop: '25px' }}>
                    <HouseholdCard />
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Mortgage</Card.Title>
                                <Card.Text>Don't include costs you will incure both renting or buying</Card.Text>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>House Price</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Down Payment Percentage(%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Interest Rate(%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>House Value Increase Per Year(%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Maintenance Percentage (%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Property Taxes (%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Yearly Costs not already included ($)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Rent</Card.Title>
                                    <Form.Group>
                                        <Form.Label>Rent Amount</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Percent Increase per year (%)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Rent Amount</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Yearly Costs not already included ($)</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Summary</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        );
    }
}