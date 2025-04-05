<script>
export default {
  emits: ['todo-added'],

  data() {
    return {
      todo: '',
    }
  },
}
</script>

<template>
  <div>
    <input
      type="text"
      id="todoInput"
      placeholder="Введите задачу"
      v-model="todo"
    />

    <button
      @click="todo && $emit('todo-added', todo), (todo = '')"
      id="addTodoButton"
    >
      Добавить задачу
    </button>
  </div>
</template>
