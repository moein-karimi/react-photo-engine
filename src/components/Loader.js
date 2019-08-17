import React from 'react';

const Loader = props => {
  return (
    <div
      style={{ display: `${props.displayLoader}` }}
      class="ui active centered inline loader"
    />
  );
};

export default Loader;
