// Initialize the array to store tasks
let tasks = [
    {
    id: 0,
    task: "IT313 Activity",
    completed: false,
  },
  {
    id: 1,
    task: "Watch Anime",
    completed: true,
  },
  {
    id: 2,
    task: "Read Manga",
    completed: false,
  },];

// Function to render the tasks on the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current task list

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.task;
        
        // Mark task as completed if it has been marked as such
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        // Toggle completion on click
        taskItem.addEventListener('click', () => toggleTaskCompletion(task.id));

        // Delete button to remove a task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggling completion on delete
            deleteTask(task.id);
        });

        taskItem.appendChild(deleteBtn); // Add delete button to the task
        taskList.appendChild(taskItem); // Add the task to the list
    });
}

// Function to add a new task to the array
function addTask(taskText) {
    const newTask = {
        id: tasks.length + 1,         // Unique ID for each task
        task: taskText,
        completed: false              // New tasks are incomplete by default
    };
    tasks.push(newTask);              // Add the new task to the array
    renderTasks();                    // Update the task list display
}

// Function to toggle a task's completion status
function toggleTaskCompletion(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;  // Toggle the completed status
        renderTasks();                     // Re-render the task list
    }
}

// Function to delete a task from the array
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id); // Remove the task with the matching ID
    renderTasks();                                // Re-render the task list
}

// Event listener for adding a new task when clicking the 'Add' button
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();   // Get the task input value

    if (taskText) {
        addTask(taskText);  // Add the task to the list
        newTaskInput.value = ''; // Clear the input field
    }
});

// Initial render of the task list (in case there are any pre-existing tasks)
document.addEventListener('DOMContentLoaded', renderTasks);
