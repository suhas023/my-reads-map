import React from 'react';
import './Error.css';

function Error(props) {
  console.log(`Error! ${props.errorMessage}`);
  return (
    <div className="modal" role="dialog">
      <h3 className="err-head">Error Occoured</h3>
      <h5 className="err-meg">{props.errorMessage.message || props.errorMessage}</h5>
      <button className="err-btn" onClick={()=>window.location.reload(true)}>Reload</button>
    </div>
  );
}

export default Error;