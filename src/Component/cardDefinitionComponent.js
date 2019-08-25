import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default class CardDefinitionComponent extends Component {
    render() {
        
        return (
            <Card style={{ width: '18rem' }} hidden={!this.props.hidden}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                            {
                                this.props.data.map(d =>(
                                    <ListGroup.Item>{d}</ListGroup.Item>
                                ))
                            }
                            </ListGroup>
                        </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}