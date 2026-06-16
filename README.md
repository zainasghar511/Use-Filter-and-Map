# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
As we near the end of our React journey (for now at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks, and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.

Prerequisites:	Familiarity with the core HTML, CSS, and JavaScript languages, and the terminal/command line.
Learning outcomes:	Conditional rendering in React, and implementing list filtering and an editing UI in our app.
In this article
Editing the name of a task
A UI for editing
Conditional rendering
Toggling the <Todo /> templates
Editing from the UI
Back to the filter buttons
Summary
Mozilla Data Collective
Get open datasets
The language datasets you've been missing
Join Now
Ad
Editing the name of a task
We don't have a user interface for editing the name of a task yet. We'll get to that in a moment. To start with, we can at least implement an editTask() function in App.jsx. It'll be similar to deleteTask() because it'll take an id to find its target object, but it'll also take a newName property containing the name to update the task to. We'll use Array.prototype.map() instead of Array.prototype.filter() because we want to return a new array with some changes, instead of deleting something from the array.

Add the editTask() function inside your <App /> component, in the same place as the other functions:

jsx

Copy
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // Copy the task and update its name
      return { ...task, name: newName };
    }
    // Return the original task if it's not the edited task
    return task;
  });
  setTasks(editedTaskList);
}
Pass editTask into our <Todo /> components as a prop in the same way we did with deleteTask:
