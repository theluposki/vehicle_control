<script setup>
import { Emitter } from '@/utils/Emitter';
import { onMounted } from 'vue';

onMounted(() => {
  Emitter.emit('list-car')
})
</script>

<template>
    <main class="page int">
      Listar Carros
    </main>
  </template>
  