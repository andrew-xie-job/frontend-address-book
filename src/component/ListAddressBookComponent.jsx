import React, {Component} from 'react'
import AddressBookDataService from '../service/AddressBookDataService';

class ListAddressBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.match.params.bookName,
            addressBooks: [],
            message: null
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
                    <h3>All Address Books</h3>
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Address Book Name</th>
                                <th>Lookup</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.addressBooks.map(
                                    addressBook =>
                                        <tr key={addressBook}>
                                            <td>{addressBook}</td>
                                            <td><button className="btn btn-success" onClick={() => this.lookupClicked(addressBook)}>Go</button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>

        )
    }
}



export default ListAddressBookComponent;
