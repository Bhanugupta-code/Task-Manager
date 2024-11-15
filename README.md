# Task Manager React App

## Overview
This Task Manager app allows users to manage their tasks by organizing them into three categories: To Do, In Progress, and Completed. The app utilizes localStorage to persist tasks across page reloads, and provides basic task management functionality including adding, editing, deleting, and moving tasks between categories. The app is built with React, using hooks for state management and reactivity.

## Features
`Task Creation`: Users can add new tasks with a name, description, and priority (High, Medium, Low).
`Task Editing`: Users can edit existing tasks.
`Task Deletion`: Users can delete tasks.
`Task Movement`: Tasks can be moved between the "To Do", "In Progress", and "Completed" categories.
`Search Functionality`: Users can search for tasks by name.
`Persistence`: Tasks are stored in localStorage to retain data even after a page refresh.

## Technologies Used
`React`: JavaScript library for building user interfaces.
`React Hooks`: For managing state and side effects.
`React Icons`: For adding icons such as edit, delete, and search.
`localStorage`: For persisting task data between page reloads.

## Usage
### Task Categories:
`To Do`: The initial state of tasks. These are tasks that need to be started.
`In Progress`: Tasks that are actively being worked on.
`Completed`: Tasks that are finished.
### Task Management:
Click the Add Task button to add a new task.
Use the Edit button (pencil icon) to modify a task.
Use the Delete button (trash icon) to remove a task.
Use the Move button (arrow icon) to move a task to the next category (e.g., from "To Do" to "In Progress").
### Search:
Use the search bar at the top to search for tasks by name across all categories. The search result will show which category the task is in, and its index within that category.

## ScreenShot
![alt text](image.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
