import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPassenger,deletePassenger } from '../passenger/passengerActions'
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";


class PassengerTable extends Component {
    UNSAFE_componentWillMount() {
        this.props.getPassenger()
    }
    render() {
        console.log(this.props.passenger)
        return (
            this.props.passenger && this.props.passenger.length > 0? 
                <div>
                    <hr class="mt-1 mb-5"></hr>
                    <Table responsive>
                        {console.log(this.props.passenger)}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.passenger.map((item) =>
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td><Button onClick={()=>this.props.deletePassenger(item.id)} variant="outline-primary"><FaTrashAlt></FaTrashAlt></Button></td>
                            </tr>
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
        passenger: state.passenger.passenger,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPassenger,deletePassenger }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerTable)