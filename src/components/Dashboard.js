import React from 'react';
import Widget from '../components/Widget';
import CircularChart from '../components/CircularChart';  // Import CircularChart component
import './Dashboard.css';
import { useDashboardContext } from '../context/DashboardContext';

const Dashboard = () => {
  const { dashboardData, dispatch } = useDashboardContext();

  const addWidget = (categoryIndex) => {
    const newWidget = {
      id: Date.now(),
      title: 'New Widget',
      content: <CircularChart />,  // Use CircularChart as content for new widgets
    };
    dispatch({ type: 'ADD_WIDGET', payload: { categoryIndex, widget: newWidget } });
  };

  const removeWidget = (categoryIndex, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryIndex, widgetId } });
  };

  return (
    <div className="dashboard">
      <h2>CNAPP Dashboard</h2>
      {dashboardData.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <div className="widget-container">
            {category.widgets.map(widget => (
              <Widget
                key={widget.id}
                title={widget.title}
                onRemove={() => removeWidget(index, widget.id)}
              >
                {widget.content}
              </Widget>
            ))}
            <button onClick={() => addWidget(index)}>
              Add Widget +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
