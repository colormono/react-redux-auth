import React from 'react';
import { connect } from 'react-redux';
import signOut from '../actions/signOut';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.handleSignOut();
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignOut() {
    dispatch(signOut());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignOut);
