import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ToggleDisplay from 'react-toggle-display';
import { clickPassenger, clickFlight, clickTicket} from './panelAction'
import Passenger from './../passenger/passenger'
import Flight from './../flight/flight'
import Ticket from './../ticket/ticket'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Style.css';
import { FaList } from "react-icons/fa";


class Panel extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="RowContainer">
                        <Col xs={2}></Col>
                        <Col className="TextRowContainer" xs={8}>Passenger</Col>
                        <Col className="RowBtnTop" x2={2}><Button onClick={()=>this.props.clickPassenger(this.props.flagPassenger)} variant="light" size="sm" className="BtnTop"><FaList/></Button> </Col>
                    </Row>
    
                <ToggleDisplay show={this.props.flagPassenger}>
                    <Passenger />
                </ToggleDisplay>
                <Row className="RowContainer">
                        <Col xs={2}></Col>
                        <Col className="TextRowContainer" xs={8}>Flight</Col>
                        <Col className="RowBtnTop" x2={2}><Button onClick={()=>this.props.clickFlight(this.props.flagFlight)} variant="light" size="sm" className="BtnTop"><FaList/></Button> </Col>
                    </Row>
                <ToggleDisplay show={this.props.flagFlight}>
                    <Flight />
                </ToggleDisplay>

                <Row className="RowContainer">
                        <Col xs={2}></Col>
                        <Col className="TextRowContainer" xs={8}>Ticket</Col>
                        <Col className="RowBtnTop" x2={2}><Button onClick={()=>this.props.clickTicket(this.props.flagTicket)} variant="light" size="sm" className="BtnTop"><FaList/></Button> </Col>
                    </Row>
                <ToggleDisplay show={this.props.flagTicket}>
                    <Ticket />
                </ToggleDisplay>
                </Container>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        flagPassenger: state.flagPassenger.flagPassenger,
        flagFlight: state.flagFlight.flagFlight,
        flagTicket: state.flagTicket.flagTicket
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickPassenger, clickFlight,clickTicket }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)