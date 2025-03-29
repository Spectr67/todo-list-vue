<script>
export default {
  props: ['todo'],

  emits: ['remove-todo', 'update-todo'],
}
</script>

<template>
  <li :class="{ completed: todo.startsWith('~') }">
    <input
      :checked="todo.startsWith('~')"
      @change="$emit('update-todo', $event.target.checked ? '~' + todo : todo)"
      type="checkbox"
      class="checkbox"
    />

    <span class="task-text"> {{ todo }} </span>

    <button @click="$emit('remove-todo', todo)" class="deleteButton">
      Удалить
    </button>
  </li>
</template>
