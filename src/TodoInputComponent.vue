<script>
export default {
  props: ['value'],
  emits: ['input-change', 'handle-add-task'],
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

    <button @click="$emit('handle-add-task', 'foobar')" id="addTaskButton">
      Добавить задачу
    </button>
  </div>
</template>
