import React from 'react';
import { CardColumns, Card, Form, Row, Col } from 'react-bootstrap';

export default class HouseholdCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income1: props.income1 ? props.income1 : 0,
            income2: props.income2 ? props.income2 : 0,
            province: props.province ? props.province : 'ON',
            tfsa1cont: props.tfsa1cont ? props.tfsa1cont : '0',
            tfsa2cont: props.tfsa2cont ? props.tfsa2cont : '0',
            rrsp1cont: props.rrsp1cont ? props.rrsp1cont : '0',
            rrsp2cont: props.rrsp2cont ? props.rrsp2cont : '0',
            tfsa1amount: props.tfsa1amount ? props.tfsa1amount : '0',
            tfsa2amount: props.tfsa2amount ? props.tfsa2amount : '0',
            rrsp1amount: props.rrsp1amount ? props.rrsp1amount : '0',
            rrsp2amount: props.rrsp2amount ? props.rrsp2amount : '0',
        }
    }
    render() {
        return (
            <CardColumns>
                <Card>
                    <Card.Body>
                        <Card.Title>Household</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your Income</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Spouse Income</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Province</Form.Label>
                                <Form.Control as="select">
                                    <option value="AB">Alberta</option>
                                    <option value="BC">British Columbia</option>
                                    <option value="MB">Manitoba</option>
                                    <option value="NB">New Brunswick</option>
                                    <option value="NL">Newfoundland and Labrador</option>
                                    <option value="NS">Nova Scotia</option>
                                    <option value="ON">Ontario</option>
                                    <option value="PE">Prince Edward Island</option>
                                    <option value="QC">Quebec</option>
                                    <option value="SK">Saskatchewan</option>
                                    <option value="NT">Northwest Territories</option>
                                    <option value="NU">Nunavut</option>
                                    <option value="YT">Yukon</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            TFSA
                        </Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your TFSA Contribution Room</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Spouse TFSA Contribution Room</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Your TFSA Amount</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Spouse TFSA Amount</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            RRSP
                        </Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Your RRSP Contribution Room</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Spouse RRSP Contribution Room</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Your RRSP Amount</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Spouse RRSP Amount</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </CardColumns>
        )
    }
}