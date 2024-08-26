<script setup>
import { db } from '@/db/databaseLocal';
import { Emitter } from '@/utils/Emitter';
import { onMounted, ref } from 'vue';

onMounted(async () => {
  Emitter.emit('list-car');
  list.value = await getListAll();
})

const list = ref([]);

const getListAll = async () => {
  return await db.vehicle.toArray();
}

</script>

<template>
    <main class="page int">
      <ul class="list">
        <li class="item" v-for="item in list" :key="item.id">
          {{ item.placa }}
        </li>
      </ul>
    </main>
  </template>
  