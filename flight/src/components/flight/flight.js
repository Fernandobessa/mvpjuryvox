import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    addFlight,
    changeNumber,
    changeOrigin,
    changeDestination,
    changeDepartureTime,
    changeArrivalTime,
    deleteFlight} from './flightActions'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FlightTable from './flightTable'
import './Style.css';



class Flight extends Component {
    render() {
        return (
            <Container>
                <FlightTable />
                <Form>
                <Row>
                    <Col xs={2}>
                            <Form.Group controlId="number">
                                <Form.Control onChange={this.props.changeNumber} type="text" placeholder="Enter your number" />
                            </Form.Group>
                    </Col> 
                    <Col xs={5}>       
                            <Form.Group controlId="origin">
                                <Form.Control onChange={this.props.changeOrigin} type="text" placeholder="Enter your origin" />
                            </Form.Group>
                    </Col>
                    <Col xs={5}> 
                             <Form.Group controlId="destination">
                                <Form.Control onChange={this.props.changeDestination} type="text" placeholder="Enter your destination" />
                            </Form.Group>       
                    </Col>
                </Row>
                <Row>
                <Col xs={6}> 
                             <Form.Group controlId="departamentuetime">
                            <Form.Control onChange={this.props.changeDepartureTime} type="text" placeholder="Enter your departamentuetime" />
                            </Form.Group>       
                    </Col>
                    <Col xs={6}> 
                             <Form.Group controlId="arrivaltime">
                            <Form.Control onChange={this.props.changeArrivalTime} type="text" placeholder="Enter your arrivaltime" />
                            </Form.Group>       
                    </Col>
                </Row> 
                </Form>
                <Row>
                <Col md="auto">
                    <Button className="BtnSubmit" onClick={()=>this.props.addFlight(this.props)} variant="primary" type="submit">
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
        flight: state.flight.flight,
        number: state.number.number,
        origin: state.origin.origin,
        destination: state.destination.destination,
        departamenturetime: state.departamenturetime.departamenturetime,
        arrivaltime: state.arrivaltime.arrivaltime

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
         addFlight,
         changeNumber,
         changeOrigin,
         changeDestination,
         changeDepartureTime,
         changeArrivalTime,
         deleteFlight}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight)