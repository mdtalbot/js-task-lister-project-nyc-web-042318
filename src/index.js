document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listForm = document.getElementById('create-list-form');
  const listInput = document.getElementById('new-list-title');
  const list = document.getElementById('lists');
  const listDiv = document.getElementById("app-content");
  const listDropDown = document.getElementById("parent-list");
  listForm.addEventListener('submit', createNewList)

  const newTaskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("new-task-priority");
  newTaskForm.addEventListener('submit', createNewTask)

  const itemArray = [];

  function createNewTask(e){
    e.preventDefault()
      // Find data-set name
      let dataSetNAme = document.get

     const selectedList = document.querySelector('option').value
    document.querySelector('[value="option-apples"]').value

    const split = selectedList.split("-")[1]
    const ul = document.getElementById(`ul-container-${split}`)
    ul.innerHTML += `<li > Description: ${taskDescription.value} Priority: ${taskPriority.value} </li>`
  }

  function createNewList(e) {
    e.preventDefault()

    itemArray.push({name: listInput.value, description: null, priority: null})
    list.innerHTML += `<div>
                      <h2> ${listInput.value}
                        <button data-title='${listInput.value}' class="delete-list">
                          X
                        </button>
                      </h2>

                      <ul id='ul-container-${listInput.value}'>

                      </ul>
                    </div>`

    listDropDown.innerHTML += `<option  data-name='${listInput.value}' value='option-${listInput.value}' >
      ${listInput.value}
    </option>`
  }


  // const app = new TaskLister();
});
