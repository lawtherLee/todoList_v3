<script setup>
import useStore from "../store/index.js";
import {ref} from "vue";

const {todosStore} = useStore()
const todoName = ref('')

const onKeyupEnter = () => {
  if (todoName.value) {
    todosStore.addTodo(todoName.value)
    todoName.value = ''
  }
}
</script>
<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="todoName"
           autofocus
           class="new-todo"
           placeholder="What needs to be done?"
           @keyup.enter="onKeyupEnter"/>
  </header>
</template>

<style lang="less" scoped></style>
