import React from 'react';
import './Navbar.css';
import { useDashboardContext } from '../context/DashboardContext';
import CircularChart from '../components/CircularChart';

const Navbar = () => {
  const { dispatch } = useDashboardContext();

  const addWidgetGlobally = () => {
    const newWidget = {
      id: Date.now(),
      title: 'Global Widget',
      content: <CircularChart />,  // Use CircularChart as content for the new widget
    };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryIndex: 0, widget: newWidget } }); // Add to the first category as an example
  };

  return (
    <div className="navbar">
      <input type="text" placeholder="Search anything..." className="search-bar" />
      <div className="navbar-actions">
        <button className="add-widget" onClick={addWidgetGlobally}>
          Add Widget +
        </button>
        <button className="last-2-days">Last 2 days</button>
      </div>
    </div>
  );
};

export default Navbar;
