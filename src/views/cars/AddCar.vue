<script setup>
import { Emitter } from '@/utils/Emitter';
import { onMounted } from 'vue';

onMounted(() => {
  Emitter.emit('add-car')
  setTimeout(() => {
    Emitter.emit('name-route', 'Adicionar')
  }, 100)
})
</script>


<template>
    <main class="page int">
      Adicionar Carro
    </main>
  </template>
  