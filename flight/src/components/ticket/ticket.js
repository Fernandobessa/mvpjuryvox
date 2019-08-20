import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFlightById,addTicket, deleteTicket, changeFlight, changePassenger, changSeatNumber } from './ticketActions'
import { getFlight } from './../flight/flightActions'
import { getPassenger } from './../passenger/passengerActions'
import { Container, Row, Col, Form, Button, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import TicketTable from './ticketTable'
import './Style.css';



class Ticket extends Component {
    render() {
        return (
            <Container>
                <TicketTable />
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="name">
                            {console.log(this.props)}
                            <Form.Control onChange={(e) => this.props.changSeatNumber(e)} type="text" placeholder="Enter your SeatNumber" />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                                onChange={(e) => this.props.changeFlight(e)}
                                as="select">
                                <option value="" >Select the Flight number</option>
                                {this.props.flights ?
                                
                                    this.props.flights.map((item) => {                                        
                                        return (
                                            <option key={item.id} value={JSON.stringify(item)}>{item.number}</option>
                                        )
                                    }) : null
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                                onChange={(e) => this.props.changePassenger(e)}
                                as="select">
                                <option value="" >Select the passenger</option>
                                {this.props.passengers ?
                                    this.props.passengers.map((item) => {
                                        return (
                                            <option key={item.id} value={JSON.stringify(item)}>{item.name} </option>
                                        )
                                    }) : null
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>

                </Row>
                <Row className="RowBtnSubmit">
                    <Col md="auto">
                        <Button  className="BtnSubmit" onClick={() => this.props.addTicket(this.props)} variant="primary" type="submit">
                            Submit
                            </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        ticket: state.ticket.ticket,
        seatnumber: state.seatnumber.seatnumber,
        passengerid: state.passengerid.passengerid,
        passengers: state.passenger.passenger,
        flights: state.flight.flight,
        input_flight: state.input_flight.input_flight,
        input_passenger: state.input_passenger.input_passenger,
        flightid: state.flightid.flightid
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTicket,getFlightById, deleteTicket, getFlight, getPassenger, changeFlight, changePassenger, changSeatNumber }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)