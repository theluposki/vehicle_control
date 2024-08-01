<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="footerM">
        <RouterLink to="/" class="nav-link" exactActiveClass="active">
            <i class="ri-dashboard-line"></i>
        </RouterLink>

        <RouterLink to="/cars" class="nav-link" activeClass="active">
            <i class="ri-roadster-fill"></i>
        </RouterLink>

        <RouterLink to="/about" class="nav-link" exactActiveClass="active">
            <i class="ri-file-info-line"></i>
        </RouterLink>
    </footer>
</template>
