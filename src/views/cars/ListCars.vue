<script setup>
import { db } from '@/db/databaseLocal';
import { Emitter } from '@/utils/Emitter';
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';
onMounted(async () => {
  Emitter.emit('list-car');
  list.value = await getListAll();
})

const list = ref([]);

const formatDate = (isoString) => {
  const date = dayjs(isoString);
  const formattedDate = date.format('DD/MM/YYYY HH:mm:ss');
  return formattedDate
}

const getListAll = async () => {
  return await db.vehicle.toArray();
}

</script>

<template>
  <main class="page int">
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.id">
        {{ item.modelo }} - {{ item.placa }} - {{ item.segmentacao }} - {{ formatDate(item.date) }}
      </li>
    </ul>
  </main>
</template>