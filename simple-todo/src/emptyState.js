import React from 'react';

const EmptyState = ({todos}) => {

    const toggleClass = todos.length === 0 ? "visible" : "hidden";

    return(
        <div className="empty-text">
          <h5 className={toggleClass}>
            Looks like you have nothing else scheduled for today!
            You can close this app and travel the world
            or start planning other tasks.
          </h5>
        </div>    
    )
}

export default EmptyState