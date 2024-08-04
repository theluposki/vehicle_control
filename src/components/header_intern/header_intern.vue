<script setup>
import { Emitter } from '../../utils/Emitter.js'
import { ref } from 'vue'

import backHeader from './backHeader.vue';
import ListCarsHeader from './components/listCarsHeader.vue';

const header = ref({
    cars: {
        list: true,
        add: false,
        details: false
    }
});

Emitter.on('list-car', () => {
    header.value.cars = { list: true, add: false, details: false }
})

Emitter.on('add-car', () => {
    header.value.cars = { list: false, add: true, details: false }
})


</script>

<template>
    <header class="headerM">
        <ListCarsHeader v-if="header.cars.list"/>
        <backHeader v-if="header.cars.add" />
    </header>
</template>

<style scoped></style>