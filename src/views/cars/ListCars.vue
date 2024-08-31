<script setup>
import { db } from '@/db/databaseLocal';
import { Emitter } from '@/utils/Emitter';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';

const { push } = useRouter();

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

const defineClassConsumidor = (segmentacao) => {
  if(segmentacao === 'consumidor') {
    return 'segmentacao consumidor'
  }
  return 'segmentacao revenda'
}

const toEditPage = (id) => {
  if(!id) return
  push(`/cars/edit/${id}`)
}

</script>

<template>
  <main class="page int">
    <ul class="list-cars">
      <li class="item" v-for="item in list" :key="item.id" @click="toEditPage(item.id)">
        <div class="left">
          <span :class="defineClassConsumidor(item.segmentacao)">
            {{ item.segmentacao }} 
          </span>
          <span class="placa">
            {{ item.placa }} 
          </span>
          <span class="modelo">
            {{ item.modelo }}
          </span>
        </div>
        
        <div class="right">
          <span class="date">
            {{ formatDate(item.date) }}
          </span>
          <span v-if="item.observacao" class="obs">
            <i class="ri-message-2-line"></i>
          </span>
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.list-cars {
  list-style: none;
  width: 100%;
  min-height: var(--list-vehicle);
  max-height: var(--list-vehicle);
  overflow-x: hidden;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
}

.item {
  --h_item: 70px;
  min-width: 100%;
  min-height: var(--h_item);
  max-height: var(--h_item);
  background-color: var(--white3);
  padding: 0 var(--p-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.item:active {
 scale: 1.015;
}

.item .left, .item .right {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: var(--h_item);
}

.item .left {
  justify-content: flex-end;
}

.item .left .segmentacao {
  position: absolute;
  top: 2px;
  left: -12px;
  background-color: var(--silver3);
  border-radius: 0 20px 20px 0;
  padding: 0 var(--p-base);
  font-size: 12px;
  color: var(--white);
  font-weight: bold;
  transition: background-color ease .4s;
}


.item .left .placa {
  color: var(--green);
  font-weight: 900;
  font-size: 18px;
  line-height: normal;
}

.item .left .modelo {
  line-height: normal;
  font-weight: bold;
  color: var(--dark5);
  text-shadow: 0 0 1px var(--green3);
  padding-bottom: 6px;
}

.item .left .segmentacao.revenda {
  background-color: var(--orange);
}

.item .left .segmentacao.consumidor {
  background-color: var(--green2);
}

.item .right .date {
  position: absolute;
  top: 2px;
  right: -12px;
  background-color: var(--white5);
  font-size: 10px;
  color: var(--dark5);
  padding: 0 var(--p-base);
  display: flex;
  width: max-content;
  border-radius: 20px 0 0 20px;
}

.item .right .obs {
  display: flex;
  align-content: center;
} 

.item .right .obs i {
  color: var(--alert);
  text-shadow: 1px 1px 2px var(--dark);
  font-size: 22px;
}
</style>