import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import signIn from '../actions/signIn';
import GoogleAuth from './GoogleAuth';

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
    this.props.handleFormSubmit(formProps, () => {
      this.redirectTo('/features');
    });
  };

  redirectTo = page => {
    this.props.history.push(page);
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: 'asd@asd.com', password: '' }}
          onSubmit={this.onSubmit}
          validationSchema={SignupSchema}
          render={props => (
            <Form className="ui form">
              <div className="ui horizontal divider">Sign in with email</div>
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
                  Sign In
                </button>
              </div>
            </Form>
          )}
        />
        <div className="ui horizontal divider">Or</div>
        <GoogleAuth cb={() => this.redirectTo('/features')} />
      </div>
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
