
let taskId = 0


class Task {
  constructor (description, priority, listId) {
    this.description = description
    this.priority = priority
    this.listId = parseInt(listId)
    this.id = ++taskId
    store.tasks.push(this)
  }



}
