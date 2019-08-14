import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPassenger } from '../passenger/passengerActions'
import { Button, Table } from 'react-bootstrap';


class PassengerTable extends Component {
    UNSAFE_componentWillMount() {
        this.props.getPassenger()
    }
    render() {
        return (
            this.props.passenger.data ?
                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.passenger.data.map((item) =>
                            <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>trash</td>
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
        passenger: state.passenger.passenger,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPassenger }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerTable)