const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_BUTTON: 'button',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let cCounter = 0

function verifyChecked(checkBox) {
  checkBox && checkBox.checked ? cCounter-- : cCounter++;
  uncheckedCountSpan.innerText = cCounter.toString()
}

function handleCounters() {
  itemCountSpan.innerText++
  cCounter = uncheckedCountSpan.innerText
  cCounter++
  uncheckedCountSpan.innerText = cCounter.toString()
}

function deleteListItem(delBtn, list) {
  let index = delBtn.getAttribute('id').match(/\d+/)[0]
  let liElement = document.getElementById(`element${index}`);
  list.removeChild(liElement)
}

function createListItem(todo) {
  handleCounters();
  let li = document.createElement('li')
  let checkbox = document.createElement('input')
  let spanText = document.createElement('span')
  let itemButton = document.createElement('button')

  checkbox.classList.add(classNames.TODO_CHECKBOX)
  itemButton.classList.add(classNames.TODO_BUTTON)
  list.classList.add(classNames.TODO_ITEM)

  checkbox.setAttribute('type', 'checkbox')
  checkbox.onclick = function() {verifyChecked(this)}

  spanText.innerText = todo;

  itemButton.innerHTML = 'Delete'
  itemButton.setAttribute('id', `del-btn-${list.childElementCount}`)
  itemButton.onclick = function() {deleteListItem(this, list)}

  li.setAttribute('id', `element${list.childElementCount}`)
  li.appendChild(checkbox)
  li.appendChild(spanText)
  li.appendChild(itemButton)
  list.appendChild(li)
}

function newTodo() {
  let todo = prompt('What do you want to do?')
  createListItem(todo);
}
