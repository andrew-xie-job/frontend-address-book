import axios from 'axios'

const API_URL = 'http://localhost:8090/api'

class AddressBookDataService {
    retrieveAllAddressBooks() {
        console.log('executed service')
        return axios.get(`${API_URL}/addressBooks`);
    }
    // @GetMapping("/addressBooks/{name}")

    retrieveContacts(bookName) {
        //console.log('executed service')
        return axios.get(`${API_URL}/addressBooks/${bookName}`);
    }

    createContact(contact) {
        //console.log('executed service')
        return axios.post(`${API_URL}/addressBook/contact`, contact);
    }

    retrieveUniqueContact(addressBookPair) {
        //console.log('executed service')
        return axios.post(`${API_URL}/addressBooks/unique/contacts`, addressBookPair);
    }
}

export default new AddressBookDataService()
