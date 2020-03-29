const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function createListItem(todo) {
  let children = list.children.length++
  let li = document.createElement('li')
  li.setAttribute('id', `element${children}`)
  li.appendChild(document.createTextNode(todo));
  list.appendChild(li)
}

function newTodo() {
  let todo = prompt('What do you want to do?')
  createListItem(todo);
}
