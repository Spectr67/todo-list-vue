<script>
export default {
  props: {
    todos: Array,
  },
  emits: ['remove-todo'],

  data() {
    return {
      todo: '',
    }
  },
}
</script>

<template>
  <ul id="taskList">
    <li
      v-for="(todo, idx) of todos"
      :key="idx"
      :class="{ completed: todo.startsWith('~') }"
    >
      <input
        v-bind:checked="todo.done"
        v-on:change="todo.done = $event.target.checked"
        type="checkbox"
        class="checkbox"
      />

      <span class="task-text"> {{ todo }} </span>

      <button @click="$emit('remove-todo', todo)" class="deleteButton">
        Удалить
      </button>
    </li>
  </ul>
</template>
