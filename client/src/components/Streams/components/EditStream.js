import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../actions';
import StreamForm from './StreamForm';

class EditStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues, () => {
      this.props.history.push('/streams');
    });
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(EditStream);
