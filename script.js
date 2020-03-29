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

function createListItem(todo) {
  itemCountSpan.innerText++
  cCounter = uncheckedCountSpan.innerText
  cCounter++
  let children = list.children.length++
  let li = document.createElement('li')
  let checkbox = document.createElement('input')
  let label = document.createElement('label')
  let itemButton = document.createElement('button')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('onClick', 'if (this.checked) {' +
          'cCounter--' +
      '} else {' +
          'cCounter++' +
      '}; ' +
      'uncheckedCountSpan.innerText = cCounter.toString()'
  )
  uncheckedCountSpan.innerText = cCounter.toString()
  label.innerText = todo;

  li.setAttribute('id', `element${children}`)
  li.appendChild(checkbox)
  li.appendChild(label)
  li.appendChild(itemButton)

  list.appendChild(li)
}

function newTodo() {
  let todo = prompt('What do you want to do?')
  createListItem(todo);
}
