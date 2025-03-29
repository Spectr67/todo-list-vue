<script>
import LITodo from './LITodo.vue'

export default {
  components: { LITodo },

  props: ['todos'],

  emits: ['remove-todo', 'update-todo'],

  methods: {
    updateTodo(newTodo, oldTodo) {
      this.todos = this.todos.map(t => (t === oldTodo ? newTodo : t))
    },

    removeTodo(todo) {
      this.todos = this.todos.filter(t => t !== todo)
    },
  },
}
</script>

<template>
  <ul id="taskList">
    <LITodo
      v-for="(todo, idx) of todos"
      :key="idx"
      :todo="todo"
      @update-todo="updateTodo($event, todo)"
      @remove-todo="removeTodo($event)"
    />
  </ul>
</template>
