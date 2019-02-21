import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    console.log(this.props.streams);
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (!this.props.streams.length > 0) {
      return <div>Loading streams...</div>;
    }

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: Object.values(state.streams)
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
