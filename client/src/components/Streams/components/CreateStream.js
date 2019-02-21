import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { createStream } from '../actions';

const StreamSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required')
});

class CreateStream extends React.Component {
  onSubmit = formValues => {
    this.props.dispatchFormSubmit(formValues, () => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        validationSchema={StreamSchema}
        initialValues={{ title: '', description: '' }}
        render={props => (
          <Form className="ui form">
            <div className="field">
              <label>Title</label>
              <Field name="title" component="input" />
              {props.errors.title && props.touched.title
                ? props.errors.title
                : null}
            </div>
            <div className="field">
              <label>Description</label>
              <Field name="description" component="textarea" />
              {props.errors.description && props.touched.description
                ? props.errors.description
                : null}
            </div>
            <div className="field">
              <button type="submit" className="ui button blue">
                Save
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchFormSubmit(formValues, callback) {
    dispatch(createStream(formValues, callback));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateStream);
