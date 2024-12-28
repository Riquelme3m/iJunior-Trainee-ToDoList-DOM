// Selecting elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let currentTodoDiv;

function saveToLocalStorage() {
    const todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        const taskDescription = todo.querySelector("h3").textContent;
        todos.push(taskDescription);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("load", () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));

    if (savedTodos) {
        savedTodos.forEach(todoText => {
            const newDiv = document.createElement("div");
            newDiv.className = "todo";
            newDiv.innerHTML = `<h3>${todoText}</h3>
                <button class="finish-todo">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="edit-todo">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="remove-todo">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
            todoList.appendChild(newDiv);
        });
    }
});

cancelEditBtn.addEventListener("click", (event) => {
    editForm.style.display = "none";
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const prevTask = currentTodoDiv.querySelector("h3").textContent;
    const newTaskDescription = editInput.value.trim();
    currentTodoDiv.querySelector("h3").textContent = newTaskDescription;

    editForm.style.display = "none";
    const todos = JSON.parse(localStorage.getItem("todos"));
    const updateTodos = todos.map((todo) => {
        if (todo === prevTask) {
            return newTaskDescription;
        }
        return todo;
    });

    localStorage.setItem("todos", JSON.stringify(updateTodos));
    editInput.value = "";
    todoForm.style.display = "block";
});

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newDiv = document.createElement("div");
    newDiv.className = "todo";
    newDiv.innerHTML = `<h3>${todoInput.value}</h3>
        <button class="finish-todo">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="edit-todo">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button class="remove-todo">
            <i class="fa-solid fa-xmark"></i>
        </button>`;

    todoList.appendChild(newDiv);
    saveToLocalStorage();
    todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("finish-todo")) {
        const todoDiv = event.target.closest(".todo");
        todoDiv.classList.toggle("finished");
    }
    if (event.target.classList.contains("remove-todo")) {
        const todoDiv = event.target.closest(".todo");
        const taskDescription = todoDiv.querySelector("h3").textContent;
        todoList.removeChild(todoDiv);

        const saveTodos = JSON.parse(localStorage.getItem("todos"));
        const updatedTodos = saveTodos.filter((todo) => {
            todo !== taskDescription;
        });
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        saveToLocalStorage();
    }

    if (event.target.classList.contains("edit-todo")) {
        const hide = document.querySelector(".hide");
        todoForm.style.display = "none";
        hide.style.display = "block";
        currentTodoDiv = event.target.closest(".todo");
    }
    if (event.target.classList.contains("hide").querySelector("#submit-edition")) {
        console.log("here");
    }
});
