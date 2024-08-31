<script setup>
import HeaderIntern from '../../components/header_intern/header_intern.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <main class="page">
      <HeaderIntern />
      <RouterView />
    </main>
  </template>
  