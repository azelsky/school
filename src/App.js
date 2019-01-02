import React, {Component} from 'react';
import {questions} from './questions';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';

import Question from './components/Question';
import Authentication from './components/Authentication'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterOfProgress: 0,
            answerInPercent: 100/questions.length,
            currentQuestion: 0,
            counterOfcorrectlyAnswer: 0,
            finish: false,
            value: '',
            testIsRun: false
        };

        this.counterOfProgress = this.counterOfProgress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.stateOfTest = this.stateOfTest.bind(this);
    }

    counterOfProgress(correctly) {
        const {counterOfProgress, answerInPercent, currentQuestion, counterOfcorrectlyAnswer} = this.state;
        this.setState({counterOfProgress: counterOfProgress + answerInPercent});
        if (correctly) this.setState({counterOfcorrectlyAnswer: counterOfcorrectlyAnswer + 1});
        if (currentQuestion < questions.length - 1) {
            this.setState({currentQuestion: currentQuestion + 1})
        }
        else this.setState({finish: true});
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    stateOfTest() {
        if (this.state.value.length > 10)
        this.setState({ testIsRun: !this.state.testIsRun });
    }

    render() {
        const {currentQuestion, counterOfProgress, finish, counterOfcorrectlyAnswer, value, testIsRun} = this.state;
        console.log(counterOfcorrectlyAnswer)
        return (
            <Grid>
                {!testIsRun && <Row>
                    <Authentication
                        handleChange={this.handleChange}
                        value={value}
                        stateOfTest={this.stateOfTest}
                    />
                </Row>}
                {testIsRun && <Row>
                    <Col md={12}>
                        <ProgressBar bsStyle="info" now={counterOfProgress} label={`${counterOfProgress.toFixed(2)}%`}/>
                    </Col>
                    {!finish && <Col md={12}>
                        <Question question={questions[currentQuestion]} counterOfProgress = {this.counterOfProgress}/>
                    </Col>}
                </Row>}
            </Grid>
        );
    }
}

export default App;
