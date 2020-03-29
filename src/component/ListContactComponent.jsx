import React, { Component } from 'react'
import AddressBookDataService from '../service/AddressBookDataService';

class ListContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.match.params.bookName,
            contacts: [],
            message: null
        };
        this.addContactClicked = this.addContactClicked.bind(this)
        this.refreshContacts = this.refreshContacts.bind(this)
    }

    componentDidMount() {
        this.refreshContacts(this.state.bookName);
    }

    refreshContacts(bookName) {
        AddressBookDataService
            .retrieveContacts(bookName)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }


    addContactClicked() {
        this.props.history.push(`/addressBook/contact/`)
    }

    render() {
        console.log('render');
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
                            this.state.contacts
                                .map(
                                    contact =>
                                    <tr key={contact.name}>
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

export default ListContactComponent
