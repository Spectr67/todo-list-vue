<script>
import TodoAdder from './components/TodoAdder.vue'
import TodosList from './components/TodosList.vue'

export default {
  components: { TodoAdder, TodosList },

  data() {
    return {
      todos: [],
    }
  },
}
</script>

<template>
  <div class="container">
    <h1>Список задач</h1>

    <TodoAdder @todo-added="todos.push($event)" />

    <TodosList v-model="todos" />
  </div>
</template>
