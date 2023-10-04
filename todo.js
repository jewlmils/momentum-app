const addBtn = document.querySelector('#add-btn');
const newTaskInput = document.querySelector('#list-wrapper input');
const taskContainer = document.querySelector('#tasks');
const error = document.querySelector('#error');
const countValue = document.querySelector('.count-value');

let taskCount = 0;

// display current task
const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
}

// adding task
function addTask(e) {
    const taskName = newTaskInput.value.trim();
    error.style.display = 'none';

    if (!taskName) {
        setTimeout(function () {
            error.style.display = 'block';
        }, 200);
        return;
    }

    const task = `<div class="task"> 
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="edit">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
        <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
        </div>`

    taskContainer.insertAdjacentHTML('afterbegin', task);

    // delete
    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(function (button) {
        button.onclick = function () {
            button.parentNode.remove();
            taskCount -= 1;
        };
    });

    // edit
    const editButtons = document.querySelectorAll('.edit')
    editButtons.forEach(function (editBtn) {
        editBtn.onclick = function (event) {
            let targetElement = event.target;
            if (!(event.target.className == 'edit')) {
                targetElement = event.target.parentElement;
            }
            newTaskInput.value = targetElement.previousElementSibling.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
        }
    });

    // crossing out completed task
    const taskCheck = document.querySelectorAll('.task-check')
    taskCheck.forEach(function (checkbox) {
        checkbox.onclick = function () {
            checkbox.nextElementSibling.classList.toggle('completed')
            if (checkbox.checked) {
                taskCount -= 1;
            } else {
                taskCount += 1;
            }
        }
    });
    taskCount += 1;
    newTaskInput.value = '';
};

// for the click button
addBtn.addEventListener('click', addTask);

// for the "enter" input
newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask(e);
    }
});

// openTodo Function:
document.addEventListener('DOMContentLoaded', function () {
    const todoBtn = document.querySelector('#todo-label-btn');
    const todoCont = document.querySelector('.list-container');

    // Hide the to-do list initially
    todoCont.classList.add('invisible');

    todoBtn.addEventListener('click', openTodo);

    function openTodo() {
        // Toggle the visibility of the to-do list
        todoCont.classList.toggle('invisible');
    }
});
