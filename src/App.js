import React, {Component} from 'react';
import {questions} from './questions'
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap'

import Question from './components/Question'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterOfAnswer: 0
        }
    }

    counterOfProgress() {
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <ProgressBar bsStyle="info" now={20}/>
                    </Col>
                    <Col md={12}>
                        <Question question={questions[0]}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
