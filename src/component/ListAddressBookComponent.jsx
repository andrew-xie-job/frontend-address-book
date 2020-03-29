import React, {Component} from 'react'
import AddressBookDataService from '../service/AddressBookDataService';
import {Link} from 'react-router-dom';

class ListAddressBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressBooks: []
        };
        this.refreshAddressBooks = this.refreshAddressBooks.bind(this);
        this.lookupClicked = this.lookupClicked.bind(this);
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

    lookupClicked(name) {
        this.props.history.push(`/addressBooks/${name}`)
    }

    render() {

        return (
            <div className="container">
                <div className="container">
                    <div>
                        <p><Link to={"/unique/contacts"}>Unique Contacts</Link></p>
                    </div>
                    <br/>
                    <h3>All Address Books</h3>
                    <ul>
                        {
                            this.state.addressBooks.map(
                                addressBook =>
                                    <li key={addressBook}>
                                        <Link to={`/addressBooks/${addressBook}/`}>{addressBook}</Link>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </div>

        )
    }
}


export default ListAddressBookComponent;
