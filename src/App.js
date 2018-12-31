import React, {Component} from 'react';
import {questions} from './questions'
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap'

import Question from './components/Question'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterOfProgress: 0,
            answerInPercent: 100/questions.length,
            currentQuestion: 0
        };
        this.counterOfProgress = this.counterOfProgress.bind(this);
    }

    counterOfProgress() {
        const {counterOfProgress, answerInPercent, currentQuestion} = this.state;
        this.setState({counterOfProgress: counterOfProgress + answerInPercent});
        if (currentQuestion < questions.length-1) this.setState({currentQuestion: currentQuestion + 1})
    }

    render() {
        const {currentQuestion, counterOfProgress} = this.state;
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <ProgressBar bsStyle="info" now={counterOfProgress}/>
                    </Col>
                    <Col md={12}>
                        <Question question={questions[currentQuestion]} counterOfProgress = {this.counterOfProgress}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
