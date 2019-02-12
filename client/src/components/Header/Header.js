import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="right menu">
          <Link to="/signout" className="item">
            Sign Out
          </Link>
          <Link to="/features" className="item">
            Features
          </Link>
        </div>
      );
    } else {
      return (
        <div className="right menu">
          <Link to="/signup" className="item">
            Sign Up
          </Link>
          <Link to="/signin" className="item">
            Sign In
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <header className="ui secondary menu">
        <Link to="/" className="item active">
          Redux Auth
        </Link>
        {this.renderLinks()}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
