import AddressBookDataService from "../service/AddressBookDataService";

export function startAddingContact(contact) {
    return (dispatch) => {
        return AddressBookDataService.createContact(contact).then(() => {
            dispatch(addContact(contact))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startLoadingContacts(addressBookName) {
    return (dispatch) => {
        return AddressBookDataService
            .retrieveContacts(addressBookName)
            .then(
                (response) => {
                    let contacts = {};
                    contacts[addressBookName] = response.data;
                    dispatch(loadContacts(contacts))
                }).catch((error) => {
                console.log(error)
            })
    }
}

export function startLoadingAddressBooks() {
    return (dispatch) => {
        return AddressBookDataService.retrieveAllAddressBooks().then(
            response => {
                dispatch(loadAddressBooks(response.data))
            }).catch((error) => {
            console.log(error)
        })
    }
}

export function addContact(contact, addressBookName) {
    return {
        type: 'ADD_CONTACT',
        contact,
        addressBookName
    }
}

export function loadContacts(contacts) {
    return {
        type: 'LOAD_CONTACTS',
        contacts
    }
}

export function loadAddressBooks(addressBooks) {
    return {
        type: 'LOAD_BOOKS',
        addressBooks
    }

}

