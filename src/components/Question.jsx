import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Answer from './Answer'

class Question extends Component {
    render() {
        return (
            <Row>
                <Col md={12}><h2>{this.props.question.question}</h2></Col>
                {this.props.question.answer.map(answer => <Answer key = {answer.text }answer={answer}/>)}
            </Row>
        );
    }
}

export default Question;
