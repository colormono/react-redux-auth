import React from 'react';
import { requireAuth } from '../../Auth';

class Features extends React.Component {
  render() {
    return <div>This is the Features</div>;
  }
}

export default requireAuth(Features);
