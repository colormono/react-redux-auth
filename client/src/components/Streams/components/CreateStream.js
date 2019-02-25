import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../actions';
import StreamForm from './StreamForm';

class CreateStream extends React.Component {
  onSubmit = formValues => {
    this.props.dispatchFormSubmit(formValues, () => {
      this.props.history.push('/streams');
    });
  };

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{ title: '', description: '' }}
        />
      </div>
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
