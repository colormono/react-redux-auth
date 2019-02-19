import React from 'react';
import { connect } from 'react-redux';
import signOut from '../actions/signOut';

class SignOut extends React.Component {
  componentDidMount() {
    if (
      this.props.auth.isSignedIn &&
      this.props.auth.user.signedWith === 'google'
    ) {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: 'email'
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.auth.signOut();
          });
      });
    }

    this.props.handleSignOut();
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  handleSignOut() {
    dispatch(signOut());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut);
