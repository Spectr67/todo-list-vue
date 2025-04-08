<script>
export default {
  props: ['todo'],

  emits: ['remove-todo', 'update-todo'],

  data() {
    return {
      isEdited: false,
    }
  },
}
</script>

<template>
  <li :class="{ completed: todo.completed }">
    <input
      type="checkbox"
      class="checkbox"
      :checked="todo.completed"
      @change="
        $emit('update-todo', { ...todo, completed: $event.target.checked })
      "
    />

    <input
      v-if="isEdited"
      :value="todo"
      @change="$emit('update-todo', $event.target.value)"
      @dblclick="isEdited = !isEdited"
    />

    <span v-else class="todo-text" @dblclick="isEdited = !isEdited">
      {{ todo }}
    </span>

    <button @click="$emit('remove-todo', todo)" class="removeButton">
      Удалить
    </button>
  </li>
</template>
