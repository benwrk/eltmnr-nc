<template>
  <div>
    <h3>Counter: {{ count }}</h3>
    <Button @click="increment">Increment</Button>
    <Button @click="decrement">Decrement</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
