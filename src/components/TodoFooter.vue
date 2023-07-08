<script setup>
import useStore from "../store/index.js";

const {todosStore} = useStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todosStore.getUnDoneCount }}</strong> item left</span>
    <ul class="filters">
      <li @click="todosStore.setActive('all')">
        <a :class="{selected:todosStore.active === 'all'}" href="#/">All</a>
      </li>
      <li @click="todosStore.setActive('undone')">
        <a :class="{selected:todosStore.active === 'undone'}" href="#/active">Active</a>
      </li>
      <li @click="todosStore.setActive('completed')">
        <a :class="{selected:todosStore.active === 'completed'}" href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todosStore.clearDone()">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
