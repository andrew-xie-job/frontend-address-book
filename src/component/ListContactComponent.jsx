import React, {Component} from 'react'
import AddressBookDataService from '../service/AddressBookDataService';
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

class ListContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }

    componentDidMount() {
        this.props.startLoadingContacts(this.props.match.params.bookName);
    }

    refreshContacts(bookName) {
        AddressBookDataService
            .retrieveContacts(bookName)
            .then(
                response => {
                    //console.log(response);
                    this.setState({contacts: response.data})
                }
            )
    }


    addContactClicked = () => {
        this.props.history.push({
            pathname: `/addressBook/contact/`,
            state: this.state.bookName
        })
    };

    render() {
        let contacts = Object.values(this.props.contacts).flat();
        return (
            <div className="container">
                <h3>All Contacts</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contacts.map(
                                (contact, index) =>
                                        <tr key={index}>
                                            <td>{contact.name}</td>
                                            <td>{contact.phoneNumber}</td>
                                        </tr>
                                )
                        }
                        </tbody>
                    </table>

                    <div className="row">
                        <button className="btn btn-success" onClick={this.addContactClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const connectedContactList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListContactComponent));
export {connectedContactList as ListContactComponent};

