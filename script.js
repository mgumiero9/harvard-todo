const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let cCounter = 0

function verifyChecked(checkBox) {
  checkBox && checkBox.checked ? cCounter-- : cCounter++;
  uncheckedCountSpan.innerText = cCounter.toString()
}

function createListItem(todo) {
  itemCountSpan.innerText++
  cCounter = uncheckedCountSpan.innerText
  cCounter++
  let children = list.children.length++
  let li = document.createElement('li')
  let checkbox = document.createElement('input')
  let spanText = document.createElement('span')
  let itemButton = document.createElement('button')

  checkbox.classList.add('todo-checkbox')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('onClick', 'verifyChecked(this)')

  uncheckedCountSpan.innerText = cCounter.toString()
  spanText.innerText = todo;

  li.setAttribute('id', `element${children}`)
  li.appendChild(checkbox)
  li.appendChild(spanText)
  li.appendChild(itemButton)

  list.appendChild(li)
}

function newTodo() {
  let todo = prompt('What do you want to do?')
  createListItem(todo);
}
