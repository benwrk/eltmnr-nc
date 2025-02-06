<script setup lang="ts">
import { Navbar } from '#components'
</script>

<template>
  <div>
    <NuxtLayout>
      <Navbar id="navbar" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
