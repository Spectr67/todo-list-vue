<script>
export default {
  emits: ['task-added'],

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
      id="taskInput"
      placeholder="Введите задачу"
      :value="todo"
      @input="todo = $event.target.value"
    />

    <button
      @click="todo && $emit('task-added', todo), (todo = '')"
      id="addTaskButton"
    >
      Добавить задачу
    </button>
  </div>
</template>
