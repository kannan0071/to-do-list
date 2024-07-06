document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-item-input');
    const button = document.getElementById('addButton');
    const todoList = document.getElementById('todo-list');

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });

    button.addEventListener('click',() => {
        if(input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value='';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
