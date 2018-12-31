import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Answer from './Answer'

class Question extends Component {
    render() {
        const {counterOfProgress, question} = this.props;
        return (
            <Row>
                <Col md={12}><h2>{this.props.question.question}</h2></Col>
                {question.answer.map(answer => <Answer key = {answer.text }answer={answer} counterOfProgress={counterOfProgress}/>)}
            </Row>
        );
    }
}

export default Question;
