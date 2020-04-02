import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

class ListAddressBookComponent extends Component {

    componentDidMount() {
        this.props.startLoadingAddressBooks();
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
                            this.props.addressBooks.map(
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

function mapStateToProps(state) {
    return {
        addressBooks: state.addressBooks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)

}


const connectedList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListAddressBookComponent));
export {connectedList as ListAddressBookComponent};
