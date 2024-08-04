<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { Emitter } from '@/utils/Emitter';
import { ref } from 'vue';

const { back } = useRouter();

const nameRouter = ref("")

Emitter.on('name-route', (name) => {
    nameRouter.value = name
})
</script>

<template>
    <div class="backHeader">
        <a @click="back" class="nav-link" exactActiveClass="active">
            <i class="ri-arrow-left-line"></i>
        </a>
        <h3 class="name-router">{{  nameRouter }}</h3>
    </div>
</template>

<style scoped>
.backHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.name-router {
    color: var(--white);
}
</style>