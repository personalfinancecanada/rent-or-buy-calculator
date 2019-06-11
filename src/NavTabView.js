import React from 'react';
import { Nav } from 'react-bootstrap';

export default class NavDropdownExample extends React.Component {
  render() {
    return (
      <Nav variant="tabs" activeKey={this.props.view} onSelect={k => this.props.onClick(k)}>
        <Nav.Item>
            <Nav.Link eventKey="income">
            Income
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="mortgage">
            Mortgage
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="rent">
            Rent
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="summary">
            Summary
            </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}