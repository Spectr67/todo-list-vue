<script>
export default {
  props: ['value'],
  emits: ['input-change', 'handleAddTask'],
  methods: {
    handleInput(event) {
      this.$emit('input-change', event.target.value)
    },
  },
}
</script>

<template>
  <div>
    <input
      type="text"
      id="taskInput"
      placeholder="Введите задачу"
      :value="value"
      @input="handleInput"
    />

    <button @click="$emit('handleAddTask')" id="addTaskButton">
      Добавить задачу
    </button>
  </div>
</template>
