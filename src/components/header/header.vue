<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

const user = computed(() => userStore.User);
</script>

<template>
    <header class="headerM">
        <RouterLink to="/" class="nav-link" exact-active-class="active">
            <img src="../../assets/localiza-logo.svg" height="120" alt="localiza">
        </RouterLink>

        <div class="userLand">
            <span class="name" :data-setor="user.setor">{{ user.nome }}</span>
            <img :src="user.photoUrl" alt="user photo">
        </div>
    </header>
</template>

<style scoped>
.userLand {
    --wh_photoUrl: 42px;
    display: flex;
    align-items: center;
    gap: var(--p-base);
}

.userLand .name {
    position: relative;
    color: var(--green3);
}

.userLand .name::before {
    content: attr(data-setor);
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 10px;
    color: var(--green2);
}

.userLand img {
    min-width: var(--wh_photoUrl);
    max-width: var(--wh_photoUrl);
    min-height: var(--wh_photoUrl);
    max-height: var(--wh_photoUrl);
    border-radius: 50%;
    object-fit: cover;
}
</style>

<style scoped>

</style>