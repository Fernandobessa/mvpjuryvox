import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTicket, getFlight, getPassengerById,deleteTicket } from '../ticket/ticketActions'
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";


class TicketTable extends Component {
    UNSAFE_componentWillMount() {
        this.props.getTicket()
    }
    render() {
        return (
            this.props.ticket && this.props.ticket.length > 0 ?
                <div>
                    <hr class="mt-1 mb-5"></hr>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>SeatNumber</th>
                                <th>Flight</th>
                                <th>Passenger</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.ticket.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        {this.props.passengerid ?
                                            <td>{this.props.passengerid[0].name}</td>
                                            : <td></td>
                                        }
                                        {this.props.flightid ?
                                            <td>{this.props.flightid[0].number}</td>
                                            : <td></td>
                                        }
                                        <td>NATATA</td>
                                        <td><Button onClick={() => this.props.deleteTicket(item.id)} variant="outline-primary"><FaTrashAlt></FaTrashAlt></Button></td>
                                    </tr>
                                )
                            }

                            )}
                        </tbody>
                    </Table>
                    <hr class="mt-4 mb-5"></hr>
                </div>
                : null

        )
    }
}


function mapStateToProps(state) {
    return {
        ticket: state.ticket.ticket,
        passengerid: state.passengerid.passengerid,
        flightid: state.flightid.flightid,
        passengers: state.passenger.passengers,
        flights : state.flight.flight

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTicket, getFlight,getPassengerById,deleteTicket}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTable)