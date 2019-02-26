import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../../history';
import Modal from '../../Modal';
import { fetchStream, deleteStream } from '../actions';

class DeleteStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id, () =>
      history.push('/streams')
    );
  };

  actions = (
    <React.Fragment>
      <button className="ui button negative" onClick={this.handleDelete}>
        Delete
      </button>
      <Link className="ui button" to="/streams">
        Cancel
      </Link>
    </React.Fragment>
  );

  renderContent() {
    if (!this.props.stream) {
      return 'Loading...';
    }

    return `Are you sure you want to delete the stream ${
      this.props.stream.title
    }?`;
  }

  render() {
    return (
      <Modal
        title="Delete stream"
        actions={this.actions}
        onDismiss={() => history.push('/streams')}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(DeleteStream);
