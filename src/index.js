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

  list.addEventListener('click', deleteList);

  function deleteList(e){
    if(e.target.className === 'delete-list') {
      let name = e.target.dataset.title
      let item = document.getElementById(name)
      list.removeChild(item)
      let optionToDelete = document.querySelector(`option[data-name="${name}"]`);
      optionToDelete.remove()
      // a[href^="#"]
      // listDropDown.innerHTML = listDropDown.innerHTML - `<option data-name='${name}' value='option-${name}'>`
      // listDropDown.innerHtml -= `<option data-name='${name}' value='option-${name}'>`
      // listDropDown.removeChild(option)
    }

    else if (e.target.className === 'delete-task'){
      let description = e.target.dataset.description
      // debugger
      let del = document.querySelector(`li[data-description="${description}"]`)
      del.remove()
    }
  }



  function createNewTask(e){
    e.preventDefault()
      // Find data-set name
      // let dataSetNAme = document.get

     let dropDown = document.getElementById('parent-list')
     let dropDownItem = dropDown.options[dropDown.selectedIndex].text
    // document.querySelector('[value="option-apples"]').value
    // debugger
    const ul = document.getElementById(`ul-container-${dropDownItem}`)
    ul.innerHTML += `<li data-description='${taskDescription.value}'> Description: ${taskDescription.value}<button data-description='${taskDescription.value}' class="delete-task"> X </button>Priority: ${taskPriority.value}</li>`
  }

  function createNewList(e) {
    e.preventDefault()

    // itemArray.push({name: listInput.value, description: null, priority: null})
    list.innerHTML += `<div id='${listInput.value}'>
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
