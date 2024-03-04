// ReceivedTask.js

import React from 'react';
import './EmployeeRequests.css';

const EmployeeRequests = ({ requester, onRequestAccept, onRequestReject }) => {
  return (

    <div className='leave'>
    <div className="received-task-container">
      <div className="text-and-buttons">
        <p className="requester-text">{requester} waseem has requested for a leave</p>
        <div className="button-container">
          <button onClick={onRequestAccept} className="accept-button">Accept Leave</button>
          <button onClick={onRequestReject} className="reject-button">Reject Leave</button>
        </div>
      </div>

      
    
    </div>

    <div className="received-task-container">
      <div className="text-and-buttons">
        <p className="requester-text">{requester} waseem has requested for a leave</p>
        <div className="button-container">
          <button onClick={onRequestAccept} className="accept-button">Accept Leave</button>
          <button onClick={onRequestReject} className="reject-button">Reject Leave</button>
        </div>
      </div>

      
    
    </div>

    

    </div>

    
  );
};

export default EmployeeRequests;
