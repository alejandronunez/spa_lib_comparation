import React from 'react';
import './Event.css';

function Event({ newMessage }) {
  return (
    <div className="event">
      <button
       onClick={() => newMessage('From message!')}
      >
        Emit a new message
      </button>
    </div>
  );
}

export default Event;
