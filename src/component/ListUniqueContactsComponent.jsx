import React, {Component} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import AddressBookDataService from '../service/AddressBookDataService';


class ListUniqueContactsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressBookName1: '',
            addressBookName2: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        let bookPair = {
            fromName: values.addressBookName1,
            toName: values.addressBookName2
        };

        AddressBookDataService.retrieveUniqueContact(bookPair)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contactNames: response.data })
                }
            );
        console.log(values);
    }

    validate(values) {
        let errors = {}
        if (!values.addressBookName1) {
            errors.addressBookName1 = 'Enter a Address Book Name'
        }
        if (!values.addressBookName2) {
            errors.addressBookName2 = 'Enter a Contact Name'
        }
        return errors
    }

    render() {

        let {contactName} = this.state;

        return (
            <div>
                <h3>Contact</h3>
                <div className="container">
                    <Formik
                        initialValues={{contactName}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="Address Book Name" component="div"
                                                  className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Address Book Name 1</label>
                                        <Field className="form-control" type="text" name="addressBookName1"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Address Book Name 2</label>
                                        <Field className="form-control" type="text" name="addressBookName2"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default ListUniqueContactsComponent;