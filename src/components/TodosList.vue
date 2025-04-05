<script>
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },

  props: ['modelValue'],

  emits: ['update:model-value'],
}
</script>

<template>
  <ul id="todoList">
    <TodoItem
      v-for="(todo, idx) of modelValue"
      :key="idx"
      :todo="todo"
      @update-todo="
        $emit(
          'update:model-value',
          modelValue.map(t => (t === todo ? $event : t))
        )
      "
      @remove-todo="
        $emit(
          'update:model-value',
          modelValue.filter(t => t !== todo)
        )
      "
    />
  </ul>
</template>
