import React from 'react';
import './Widget.css';

const Widget = ({ title, children, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{title}</h3>
        <button className="remove-widget" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="widget-content">
        {children || <p>No Graph data available!</p>}
      </div>
    </div>
  );
};

export default Widget;
