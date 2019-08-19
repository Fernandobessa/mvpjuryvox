import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFlight,deleteFlight } from '../flight/flightActions'
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";


class FlightTable extends Component {
    UNSAFE_componentWillMount() {
        this.props.getFlight()
    }
    
    render() {
        return (
            this.props.flight && this.props.flight.length > 0? 
                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>DepartureTime</th>
                                <th>ArrivalTime</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.flight.map((item) =>
                            <tr key={item.id}>
                            <td>{item.number}</td>
                            <td>{item.origin}</td>
                            <td>{item.destination}</td>
                            <td>{item.departamenturetime}</td>
                            <td>{item.arrivaltime}</td>
                            <td><Button onClick={()=>this.props.deleteFlight(item.id)} variant="outline-primary"><FaTrashAlt></FaTrashAlt></Button></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
                : null

        )
    }
}


function mapStateToProps(state) {
    return {
        flight: state.flight.flight,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getFlight,deleteFlight }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightTable)