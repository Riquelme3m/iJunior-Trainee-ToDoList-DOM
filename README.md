# iJunior-Trainee-ToDoList-DOM

# Todo App Project

## Overview

This project was created to practice JavaScript, DOM manipulation, and using Local Storage for saving and retrieving data. It allows users to add, edit, remove, and mark tasks as completed in a todo list.

## Key Features

- **Add tasks**: Users can add new tasks to the todo list.
- **Edit tasks**: Users can edit existing tasks.
- **Remove tasks**: Users can delete tasks from the list.
- **Mark tasks as completed**: Tasks can be marked as done, changing their appearance.
- **Persist tasks**: Tasks are stored in Local Storage, allowing them to persist even after the browser is closed or refreshed.

## Technologies Used

- **HTML**: Structuring the page and defining the form elements.
- **CSS**: Styling the page and making it responsive.
- **JavaScript**: Used for DOM manipulation and handling events (such as adding, editing, and removing tasks).
- **Local Storage**: Storing tasks locally so they persist across page reloads.

## How It Works

1. **Adding Tasks**:
   - Users can input a task in the input field and submit it to the list.
   - The task is stored in Local Storage and rendered on the page.

2. **Editing Tasks**:
   - Users can edit a task by clicking the "edit" button next to it.
   - The input field is populated with the current task description, allowing the user to make changes.
   - After submitting, the task is updated in Local Storage.

3. **Removing Tasks**:
   - Each task has a "delete" button that removes it from the list and updates Local Storage.

4. **Marking Tasks as Completed**:
   - Users can mark tasks as completed by clicking the "check" button next to them.
   - Completed tasks are visually distinguished with a strike-through and a different background color.

## Screenshots

![Todo App Screenshot](./img/TodoApp.png)



