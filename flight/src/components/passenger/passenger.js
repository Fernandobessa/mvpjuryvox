import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPassenger,changeName,changeGender,deletePassenger } from './passengerActions'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PassengerTable from './passengerTable'



class Passenger extends Component {
    render() {
        return (
            <Container>
                <PassengerTable />
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="name">
                                {console.log(this.props)}
                                <Form.Control onChange={this.props.changeName} type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Control onChange={this.props.changeGender} type="text" placeholder="Enter your gender" />
                            </Form.Group>
                    
                        </Form>
                    </Col>
                </Row>
                <Row>   
                <Button onClick={()=>this.props.addPassenger(this.props)} variant="primary" type="submit">
                                Submit
                            </Button>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        passenger: state.passenger.passenger,
        gender: state.gender.gender,
        name: state.gender.name

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addPassenger,changeName,changeGender,deletePassenger}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Passenger)