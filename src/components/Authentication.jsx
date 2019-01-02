import React, {Component} from 'react';
import {Col, Row, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap'

class Authentication extends Component {
    constructor(props) {
        super(props);

    }

    getValidationState() {
        const length = this.props.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    render() {
        const {value, handleChange, stateOfTest} = this.props;
        return (
            <Col sm={12}>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>Введіть свої дані</ControlLabel>
                        <FormControl
                            type="text"
                            value={value}
                            placeholder="Enter text"
                            onChange={handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Приклад: Перегінський Миколай 6-Б</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                        <Col>
                            <Button onClick={stateOfTest}>Почати тест</Button>
                        </Col>
                    </FormGroup>
                </form>
            </Col>
        );
    }
}

export default Authentication;
