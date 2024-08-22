# CNAPP Dashboard - Frontend Assignment

This project is a frontend assignment for AccuKnox, designed to create an interactive CNAPP (Cloud-Native Application Protection Platform) Dashboard. The dashboard features widgets for cloud account risk assessment, namespace-specific alerts, workload alerts, and more. The project is built using React, Context API for state management, and Chart.js for visualizations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Widget Management](#widget-management)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Features

- **Responsive Dashboard**: The dashboard is fully responsive and adapts to different screen sizes.
- **Dynamic Widgets**: Add or remove widgets dynamically on the dashboard.
- **State Management**: Implemented using Context API for managing global state.
- **Chart Visualizations**: Visualize data using circular charts with different color indicators.
- **Modern UI**: Clean and modern user interface using custom CSS and components.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/keshri29/accuknox-Assignment-For-Frontend-Trainees.git
   cd accuknox-Assignment-For-Frontend-Trainees
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then, install the required packages by running:

   ```bash
   npm install
   ```

3. **Start the development server:**

   Run the following command to start the application in development mode:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

After starting the development server, you can access the dashboard at `http://localhost:3000`. 

- **Adding Widgets:** Use the "Add Widget +" button in the Navbar to dynamically add widgets to the dashboard.
- **Removing Widgets:** Each widget has a "Remove" button that allows you to delete the widget from the dashboard.

## State Management

State management is handled globally using Context API. This allows the dynamic addition and removal of widgets across the application without prop drilling.

## Widget Management

Widgets in the dashboard can be added or removed dynamically. The structure of the widgets is defined in the `Dashboard.js` file, and the content (such as charts) is managed within individual components like `CircularChart.js`.

## Screenshots

![Dashboard Screenshot](screenshots/dashboard.png)
![Add Widget](screenshots/add-widget.png)

## Contact

For any queries, reach out to me at:

- **Email:** [keshrianurag690@gmail.com](mailto:keshrianurag690@gmail.com)
- **Portfolio:** [vsanurag.netlify.app](https://vsanurag.netlify.app/)

Feel free to fork this repository, submit issues, and contribute to the project.

---

© 2024 Anurag Kumar
```

### Instructions:

1. **Screenshots**: Replace the placeholder paths in the `Screenshots` section with actual paths to screenshots in your repository. You may need to add the images to a `screenshots` folder.
   
2. **Live Demo Link**: The link provided is based on your Netlify site. Ensure that the link works as expected. 

3. **Contact Information**: Your email and portfolio link are included under the Contact section.

This README provides a comprehensive guide for anyone who wants to understand, install, and use your project.
