<script>
import ExampleChild from './ExampleChild.vue'

export default {
  components: { ExampleChild },

  data() {
    return {
      nick: 'Bond',
    }
  },
}
</script>

<template>
  <div>
    <h1 v-on:click="nick = 'James'">Example</h1>
    <ExampleChild
      v-bind:username="nick"
      v-on:username-updated="nick = $event"
    ></ExampleChild>
  </div>
</template>
