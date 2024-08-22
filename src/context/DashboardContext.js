import React, { createContext, useContext, useReducer } from 'react';

const DashboardContext = createContext();

const initialState = [
  {
    category: "CSPM Executive Dashboard",
    widgets: [
      { id: 1, title: "Cloud Accounts", content: "Circular Chart Placeholder" },
      { id: 2, title: "Cloud Account Risk Assessment", content: "Risk Chart Placeholder" },
    ],
  },
  {
    category: "CWPP Dashboard",
    widgets: [
      { id: 3, title: "Top 5 Namespace Specific Alerts", content: "Alerts Data Placeholder" },
      { id: 4, title: "Workload Alerts", content: "Workload Data Placeholder" },
    ],
  },
  {
    category: "Registry Scan",
    widgets: [
      { id: 5, title: "Image Risk Assessment", content: "Vulnerability Chart Placeholder" },
      { id: 6, title: "Image Security Issues", content: "Security Chart Placeholder" },
    ],
  },
];

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return state.map((category, index) => {
        if (index === action.payload.categoryIndex) {
          return {
            ...category,
            widgets: [...category.widgets, action.payload.widget],
          };
        }
        return category;
      });
    case 'REMOVE_WIDGET':
      return state.map((category, index) => {
        if (index === action.payload.categoryIndex) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId),
          };
        }
        return category;
      });
    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [dashboardData, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ dashboardData, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
