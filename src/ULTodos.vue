<script>
import LITodo from './LITodo.vue'

export default {
  components: { LITodo },

  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <ul id="todoList">
    <LITodo
      v-for="(todo, idx) of modelValue"
      :key="idx"
      :todo="todo"
      @update-todo="
        ({ oldTodo, newTodo }) =>
          $emit(
            'update:model-value',
            modelValue.map(todo => (todo === oldTodo ? newTodo : todo))
          )
      "
      @remove-todo="
        $emit(
          'update:model-value',
          modelValue.filter(t => t !== todo)
        )
      "
      @update-todo-text="update - todo - text"
    />
  </ul>
</template>
