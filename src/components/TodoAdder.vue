<script>
const initTodo = () => ({
  text: '',
  completed: false,
})

export default {
  emits: ['todo-added'],

  data() {
    return {
      todo: initTodo(),
    }
  },

  methods: {
    handleClick() {
      if (this.todo.text) {
        this.$emit('todo-added', { ...this.todo })
        this.todo = initTodo()
      }
    },
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

    <button @click="handleClick" id="addTodoButton">Добавить задачу</button>
  </div>
</template>
