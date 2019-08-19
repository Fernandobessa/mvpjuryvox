import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTicket, changeName, changeGender, deleteTicket } from './ticketActions'
import {getFlight} from './../flight/flightActions'
import{getPassenger} from './../passenger/passengerActions'
import { Container, Row, Col, Form, Button,InputGroup,DropdownButton,Dropdown,FormControl } from 'react-bootstrap';
import TicketTable from './ticketTable'
import Flight from './../flight/flight'



class Ticket extends Component {
    handleChange(event) {
        console.log(event.target.value)
      }
    
    render() {
        return (
            <Container>
                <TicketTable />
                        <Row>
                        <Col xs={6}>
                            <Form.Group controlId="name">
                                {console.log(this.props)}
                                <Form.Control onChange={this.props.changeName} type="text" placeholder="Enter your SeatNumber" />
                            </Form.Group>
                        </Col>           
                        <Col xs={3}>
                            <InputGroup className="mb-3">
                                <DropdownButton 
                                    as={InputGroup.Prepend}
                                    variant="outline-secondary"
                                    title="Select Flight"
                                    id="input-group-dropdown-1"
                                >
                                
                                {this.props.flights ? 
                                  this.props.flights.map((item) => {
                                      return(
                                    <Dropdown.Item href="#">{item.number}</Dropdown.Item>
                                      )}):null
                                }
                
                                </DropdownButton>     
                            </InputGroup>
                            </Col>
                            <Col xs={3}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)}
                                as="select">
                            <option value="" >Select the passenger</option>
                                {this.props.passengers ? 
                                  this.props.passengers.map((item) => {
                                      return(
                                        <option value={item.id}>{item.name}</option>
                                      )}):null
                                }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                                
                </Row>
                <Row>
                    <Button onClick={() => this.props.addTicket(this.props)} variant="primary" type="submit">
                        Submit
                            </Button>
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
        flightid: state.flightid.flightid,
        passengers: state.passenger.passenger,
        flights: state.flight.flight



    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTicket,changeName, changeGender, deleteTicket,getFlight,getPassenger }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)