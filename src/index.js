document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const form = document.getElementById("create-list-form")
  form.addEventListener("submit", new_list)
  const lists = document.getElementById("lists")
  const new_task_form_div = document.getElementById("new-task-form")



  function new_list(event){
    event.preventDefault()
    const userInput = event.target.querySelector("#new-list-title").value

    let new_list = new List(userInput)
    console.log(new_list)

    let new_list_div = document.createElement("div")
    new_list_div.innerHTML = new_list.title
    new_list_div.id = new_list.id
    lists.appendChild(new_list_div)

    let new_list_delete_button = document.createElement("button")
    new_list_delete_button.innerHTML = "Delete"
    new_list_div.appendChild(new_list_delete_button)

    ///delete action
        new_list_delete_button.addEventListener("click", ()=>{
          new_list_div.remove()
          //remove the option from the new task form too
          document.getElementById(`Option${new_list_div.id}`).remove()
          create_task_form.reset()
        })

    ///create the task form
    let task_form = new TaskLister()

    new_task_form_div.innerHTML = task_form.render()


    const create_task_form = document.getElementById("create-task-form")

    //event for creating new tasks
    create_task_form.addEventListener("submit", new_task)

    //event for adding the new tasks to the list





    form.reset()

  }


  function new_task(event){
    event.preventDefault()
    let parent_list = document.getElementById("parent-list").value
    let task_description = document.getElementById("new-task-description").value
    let task_priority = document.getElementById("new-task-priority").value

    let new_task = new Task(task_description, task_priority, parent_list)
    console.log(new_task)

    //make html element for the new_last
    let new_task_li = document.createElement("li")
    new_task_li.innerHTML = `Task: ${new_task.description} <br> Priority: ${new_task.priority}`

    //delete button
    let new_task_delete_button = document.createElement("button")
    new_task_delete_button.innerHTML = "Delete"
    new_task_delete_button.addEventListener("click", function delete_task(){
      new_task_li.remove()
    })

    let relevant_list = document.getElementById(`${new_task.listId}`)
    console.log(relevant_list)


    relevant_list.appendChild(new_task_li)
    new_task_li.appendChild(new_task_delete_button)

    event.target.reset()

  }
















  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
}); //end
