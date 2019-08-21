import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ToggleDisplay from 'react-toggle-display';
import { clickPassenger, clickFlight, clickTicket,getAlertPassenger} from './panelAction'
import Passenger from './../passenger/passenger'
import Flight from './../flight/flight'
import Ticket from './../ticket/ticket'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Style.css';
import { FaList,FaExclamationCircle } from "react-icons/fa";


class Panel extends Component {
    UNSAFE_componentWillMount() {
        this.props.getAlertPassenger()
    }
    render() {
        return (
            <div>
                <Container>
                    {console.log(this.props.alert)}
                    {this.props.alert.length >=1 ? 
                      this.props.alert.map((item) =>
                     <Row className="RowAlert">
                         <Col xs={2}></Col>
                        <Col xs={2}></Col>
                        <Col className="RowBtnTop" xs={8}><Button variant="light" className="BtnAlert"><FaExclamationCircle/> O Usuário {item} tem mais que 3 tickets</Button> </Col>
                     </Row>
                     )
                    :null}
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
        flagTicket: state.flagTicket.flagTicket,
        alert: state.alert.alert
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clickPassenger, clickFlight,clickTicket,getAlertPassenger }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)