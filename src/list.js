
  const store = {lists: [ ], tasks: [ ]}

  let listId = 0

  class List {
    constructor (title) {
      this.title = title
      this.id = ++listId
      store.lists.push(this)
    }

    tasks(){
      return store.tasks.filter((task)=> {
      return task.listId === this.id
      })
    }

    static render_list_options(){
      return store.lists.map((list) => {
        return (
          `<option id=Option${list.id} value = ${list.id}> ${list.title}</option>`
        )
      })
    }

    render_list(){


    }





  }
