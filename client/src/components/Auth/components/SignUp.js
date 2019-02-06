import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import signUp from '../actions/signUp';

class SignUp extends React.Component {
  onSubmit = formProps => {
    this.props.handleFormSubmit(formProps, () => {
      this.props.history.push('/features');
    });
  };

  render() {
    const { handleSubmit } = this.props; // provided by redux-form

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <fieldset>
          <button type="submit">Sign Up</button>
        </fieldset>
      </form>
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
    dispatch(signUp(formProps, callback));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'SignUp' })
)(SignUp);
