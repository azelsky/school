import React, {Component} from 'react';
import {Button, Col} from 'react-bootstrap';

class Answer extends Component {
    render() {
        const {answer: {text}} = this.props
        return (
            <Col md={12}>
                <Button bsStyle="primary" bsSize="sm" block onClick={this.props.counterOfProgress}>
                    <p>{`${text}`}</p>
                </Button>
            </Col>
        );
    }
}

export default Answer;
