<script setup>
import useStore from "../store/index.js";

const {todosStore} = useStore()
todosStore.$subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(todosStore.list))
})
todosStore.$subscribe(() => {
  console.log(2)
})
</script>

<template>
  <section class="main">
    <input id="toggle-all" :checked="todosStore.isAllDone" class="toggle-all"
           type="checkbox" @click="todosStore.changeAllDone(!todosStore.isAllDone)"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="item in todosStore.filterList()" :key="item.id" :class="{
        completed: item.done
      }">
        <div class="view">
          <input :checked="item.done" checked class="toggle" type="checkbox" @click="todosStore.setTodoDone(item.id)"/>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="todosStore.delTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template"/>
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
