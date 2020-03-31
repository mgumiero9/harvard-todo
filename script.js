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
let iCounter = 0

function verifyChecked(checkBox) {
  checkBox && checkBox.checked ? cCounter-- : cCounter++;
  uncheckedCountSpan.innerText = cCounter.toString()
}

function handleCounters(mICounter, mCCounter) {
  iCounter = parseInt(itemCountSpan.innerText)
  cCounter = parseInt(uncheckedCountSpan.innerText)
  iCounter += mICounter
  cCounter += mCCounter
  itemCountSpan.innerText = iCounter
  uncheckedCountSpan.innerText = cCounter
}

function deleteListItem(delBtn, list) {
  let index = delBtn.getAttribute('id').match(/\d+/)[0]
  let li = document.getElementById(`element${index}`);
  let checkbox = li.getElementsByTagName('input');
  checkbox && checkbox[0] && checkbox[0].checked
      ? handleCounters(-1, 0)
      : handleCounters(-1, -1);
  list.removeChild(li)
}

function setupElements(checkbox, itemButton, spanText, todo) {
  checkbox.classList.add(classNames.TODO_CHECKBOX)
  itemButton.classList.add(classNames.TODO_BUTTON)
  list.classList.add(classNames.TODO_ITEM)

  checkbox.setAttribute('type', 'checkbox')
  checkbox.onclick = function () {
    verifyChecked(this)
  }

  spanText.innerText = todo;

  itemButton.innerHTML = 'Delete'
  itemButton.setAttribute('id', `del-btn-${list.childElementCount}`)
  itemButton.onclick = function () {
    deleteListItem(this, list)
  }
}

function createListItem(todo) {
  handleCounters(1, 1);
  let li = document.createElement('li')
  let checkbox = document.createElement('input')
  let spanText = document.createElement('span')
  let itemButton = document.createElement('button')

  setupElements(checkbox, itemButton, spanText, todo);

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
