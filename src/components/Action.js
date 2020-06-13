import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Who's Getting The 1st Pick?
      </button>
  </div>
);

export default Action;
