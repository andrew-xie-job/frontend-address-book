import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import AddressBookDataService from '../service/AddressBookDataService';


class ContactComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressBookName: '',
            contactName: '',
            phoneNumber: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        let contact = {
            addressBookName: values.addressBookName,
            contactName: values.contactName,
            phoneNumber: values.phoneNumber
        };

        AddressBookDataService.createContact(contact)
            .then(() => this.props.history.push('/'));
        console.log(values);
    }

    validate(values) {
        let errors = {};
        if (!values.addressBookName) {
            errors.addressBookName = 'Enter a Address Book Name'
        } else if (!values.contactName) {
            errors.contactName = 'Enter a Contact Name'
        } else if (!values.phoneNumber) {
            errors.phoneNumber = 'Enter a Phone Number'
        }
        return errors
    }

    render() {

        let {addressBookName, contactName, phoneNumber} = this.state;

        return (
            <div>
                <h3>Contacts</h3>
                <div className="container">
                    <Formik
                        initialValues={{addressBookName, contactName, phoneNumber}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Address Book Name</label>
                                        <Field className="form-control" type="text" name="addressBookName"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Contact Name</label>
                                        <Field className="form-control" type="text" name="contactName"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Phone Number</label>
                                        <Field className="form-control" type="text" name="phoneNumber"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default ContactComponent
