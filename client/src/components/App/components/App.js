import React from 'react';
import { Header } from '../../Header';

export default props => {
  return (
    <div className="ui container">
      <Header />
      {props.children}
    </div>
  );
};
