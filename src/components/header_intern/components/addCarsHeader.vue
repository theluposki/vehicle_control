<script setup>
import { RouterLink, useRouter } from 'vue-router'

const { back } = useRouter();

</script>

<template>
    <div class="">
        <a @click="back" class="nav-link" exactActiveClass="active">
            <i class="ri-arrow-left-line"></i>
        </a>
    </div>
</template>