import React, { Component } from 'react';
import ListContactComponent from './ListContactComponent';
import ListAddressBookComponent from './ListAddressBookComponent'
import ListUniqueContactsComponent from './ListUniqueContactsComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactComponent from './ContactComponent';

class AddressBookApp extends Component {
    render() {
            return (
                <Router>
                    <>
                        <h1>Address Book Application</h1>
                        <Switch>
                            <Route path="/" exact component={ListAddressBookComponent} />
                            <Route path="/addressBooks/:bookName" exact component={ListContactComponent} />
                            <Route path="/addressBook/contact" component={ContactComponent}/>
                            <Route path="/addressBooks/unique/contacts" component={ListUniqueContactsComponent}/>
                        </Switch>
                    </>
                </Router>
            )
        }
}
export default AddressBookApp

