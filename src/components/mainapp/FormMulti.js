import React from 'react';
import {Formik} from 'formik';
import FormLabelAndFields from '../form/FormLabelAndFields';
import FormErrors from '../form/FormErrors';
import SaveCancel from '../form/SaveCancel';
import * as validateBook from './validation';

class FormMulti extends React.Component {
    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
    }
    onCancel() {
        this.props.handleForm(false, false);
    }
    render() {
        if (!this.props.isFormNeeded) return null;
        const bookToEdit = this.props.bookToEdit;
        return (
            <Formik
            initialValues={ (this.props.isCreating) ?
                {
                    title: '', author: '', numPages: '', yearPub: '', bookColor: '#FBF2E3'
                }
                : {
                    title: bookToEdit.title, author: bookToEdit.author, numPages: bookToEdit.numPages,
                    yearPub: bookToEdit.yearPub, bookColor: bookToEdit.bookColor
                }
                }
            onSubmit = {(values, { setSubmitting }) => {
                //send values back to App
                console.log("i reached here")
                this.props.handleSave(values.title, values.author, values.numPages, values.yearPub, values.bookColor);
                this.props.handleForm(false, false);
                setSubmitting(false);
            }}
            validate = {values => {
                const errors = {}
                const titleMessage = validateBook.validateTitle(values.title);
                const authorMessage = validateBook.validateAuthor(values.author);
                const numPagesMessage = validateBook.validateNumPages(values.numPages);
                const yearPubMessage = validateBook.validateYearPub(values.yearPub);
                if (titleMessage) errors.title = titleMessage;
                if (authorMessage) errors.author = authorMessage;
                if (numPagesMessage) errors.numPages = numPagesMessage;
                if (yearPubMessage) errors.yearPub = yearPubMessage;
                return errors
            }}
            >
                {
                    ({handleBlur, errors,
                      values ,handleSubmit, handleChange,touched}) => (
                        <form className='formContainer'>
                        <FormLabelAndFields {...{handleChange, values, handleBlur, touched}}
                            titleError={errors.title} authorError={errors.author}
                            numPagesError={errors.numPages} yearPubError={errors.yearPub}
                        />
                        <FormErrors errors={errors} touched={touched}/>
                        <SaveCancel cancel={this.onCancel} handleSubmit={handleSubmit}/>
                        </form>
                    )
                }
            </Formik>
        )
    }
}

export default FormMulti;