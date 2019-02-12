import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import signIn from '../actions/signIn';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});


class SignIn extends React.Component {
  onSubmit = formProps => {
    console.log(formProps);
    this.props.handleFormSubmit(formProps, () => {
      this.props.history.push('/features');
    });
  };

  render() {
    return (
      <Formik
        initialValues={{ email: 'asd@asd.com', password: '' }}
        onSubmit={this.onSubmit}
        validationSchema={SignupSchema}
        render={props => (
          <Form className="ui form">
            <div className="field">
              <label>Email</label>
              <Field name="email" type="email" autoComplete="none" />
              {props.errors.email && props.touched.email ? (
                <div>{props.errors.email}</div>
              ) : null}
            </div>

            <div className="field">
              <label>Password</label>
              <Field name="password" type="password" />
              {props.errors.password && props.touched.password ? (
                <div>{props.errors.password}</div>
              ) : null}
            </div>

            <div>{this.props.errorMessage}</div>

            <div className="field">
              <button type="submit" className="ui button">
                Sign Up
              </button>
            </div>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  handleFormSubmit(formProps, callback) {
    dispatch(signIn(formProps, callback));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
