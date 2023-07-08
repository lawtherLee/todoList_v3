import {defineStore} from "pinia";

export const useTodosStore = defineStore('totos', {
  state: () => {
    return {
      list: JSON.parse(localStorage.getItem('todos')) || [],
      active: 'all'
    }
  },
  actions: {
    setTodoDone(id) {
      const todoItem = this.list.find(item => item.id === id)
      todoItem.done = !todoItem.done
    },
    delTodo(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    addTodo(name) {
      const todo = {
        id: Math.random(),
        name,
        done: false
      }
      this.list.push(todo)
    },
    changeAllDone(done) {
      this.list.forEach(item => item.done = done)
    },
    clearDone() {
      this.list = this.list.filter(item => item.done === false)
    },
    setActive(val) {
      this.active = val
    },
    filterList() {
      if (this.active === 'undone') return this.list.filter(item => !item.done)
      if (this.active === 'completed') return this.list.filter(item => item.done)
      return this.list
    }
  },
  getters: {
    isAllDone() {
      return this.list.every(item => item.done)
    },
    getUnDoneCount() {
      return this.list.filter(item => !item.done).length
    }
  }
})
