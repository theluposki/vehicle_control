<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="group-links">
        <RouterLink to="/cars/" class="nav-link" exactActiveClass="active">
            <i class="ri-file-list-line"></i>
        </RouterLink>
        <RouterLink to="/cars/add" class="nav-link" activeClass="active">
            <i class="ri-file-add-line"></i>
        </RouterLink>
    </div>

    <div class="search-header">
        <input type="text" class="input" placeholder="pesquisar...">
        <button class="rounded-btn_input">
            <i class="ri-search-eye-line"></i>
        </button>
    </div>
</template>