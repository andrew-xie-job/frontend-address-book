import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListContactComponent from './ListContactComponent';
import ListAddressBookComponent from './ListAddressBookComponent';
import ListUniqueContactsComponent from './ListUniqueContactsComponent';
import ContactComponent from './ContactComponent';

class AddressBookApp extends Component {
    render() {
            return (
                <BrowserRouter>
                    <>
                        <h1>Address Book Application</h1>
                        <Switch>
                            <Route path="/" exact component={ListAddressBookComponent} />
                            <Route path="/addressBooks/:bookName/" component={ListContactComponent} />
                            <Route path="/addressBook/contact" component={ContactComponent}/>
                            <Route path="/unique/contacts" component={ListUniqueContactsComponent}/>
                        </Switch>
                    </>
                </BrowserRouter>
            )
        }
}
export default AddressBookApp

