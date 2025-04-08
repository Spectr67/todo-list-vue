<script>
export default {
  emits: ['todo-added'],

  data() {
    return {
      todo: {
        text: '',
        completed: false,
      },
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
      v-model="todo.text"
    />

    <button
      @click="todo && $emit('todo-added', todo.text), (todo.text = '')"
      id="addTodoButton"
    >
      Добавить задачу
    </button>
  </div>
</template>
