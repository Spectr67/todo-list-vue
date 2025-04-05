<script>
export default {
  props: ['todo'],
  emits: ['remove-todo', 'update-todo', 'update-todo-text'],
}
</script>

<template>
  <li :class="{ completed: todo.startsWith('~') }">
    <input
      type="checkbox"
      class="checkbox"
      :checked="todo.startsWith('~')"
      @change="
        $emit('update-todo', {
          oldTodo: todo,
          newTodo: $event.target.checked
            ? '~' + todo.replace(/^~/, '')
            : todo.replace(/^~/, ''),
        })
      "
    />

    <span class="todo-text" @dblclick="$emit('update-todo-text', todo)">
      {{ todo }}
    </span>

    <button @click="$emit('remove-todo', todo)" class="removeButton">
      Удалить
    </button>
  </li>
</template>
