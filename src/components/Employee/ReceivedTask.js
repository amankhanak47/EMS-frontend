import React from 'react';
import './ReceivedTask.css'; // Import CSS file for styles

const ReceivedTask = ({ subject, description, deadline }) => {
  return (
    <div className='tasks'>
      <div className="taskCard">
        <div className="taskDescription">{description} hello aman can you fix this bug</div>
        <div className="taskMeta">
          <div>Subject: error {subject}</div>
          <div>Deadline: {deadline}18-02-2002</div>
        </div>
        <button className='button'>Submit Task</button>
      </div>
    </div>
  );
};



export default ReceivedTask;