import React, {Component} from 'react'
import AddressBookDataService from '../service/AddressBookDataService';
import ListContactComponent from './ListContactComponent'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class ListAddressBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.match.params.bookName,
            addressBooks: [],
            message: null
        };
        this.refreshAddressBooks = this.refreshAddressBooks.bind(this);
    }

    componentDidMount() {
        this.refreshAddressBooks();
    }

    refreshAddressBooks() {
        AddressBookDataService
            .retrieveAllAddressBooks()
            .then(
                response => {
                    console.log(response);
                    this.setState({addressBooks: response.data})
                }
            )
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h3>All Address Books</h3>
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <ul>
                            {this.state.addressBooks
                                .map(addressBook => <li key={addressBook}><Link
                                    to={`/addressBooks/${addressBook}`}>{addressBook}</Link></li>)}
                        </ul>
                    <Switch>
                        <Route path="/addressBooks/:bookName" component={ListContactComponent}/>
                     </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default ListAddressBookComponent;
